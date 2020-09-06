import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Row } from 'antd';
import Service from '../services/ApiService';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Paginations from '../components/Paginations';
import Loading from '../components/Loading';
import ListRooms from '../components/ListRooms';

export default function SearchPage() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const queryValue = queryString.parse(location.search).name;
  const [searchList, setSearchList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 15,
    _totalRow: 0,
  });
  const [filters, setFilter] = useState({
    _page: 1,
    _limit: 15,
    name_like: queryValue,
  });

  useEffect(() => {
    Service.findByName(filters)
      .then((res) => {
        const { data } = res;
        setSearchList(data);
        setLoading(false);
        setPagination((prev) => {
          return { ...prev, _page: filters._page };
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, [filters, queryValue]);

  useEffect(() => {
    if (!pagination._totalRow) {
      Service.findByName({ name_like: queryValue })
        .then((res) => {
          const { data } = res;
          setPagination((prev) => {
            return { ...prev, _totalRow: data.length };
          });
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (queryValue !== filters.name_like) {
      window.location.reload();
    }
  }, [queryValue, pagination._totalRow, filters.name_like]);

  const handerPageChange = (newPage) => {
    setFilter({
      ...filters,
      _page: newPage,
    });
  };

  return (
    <>
      <Navbar />
      <div className="body">
        <div className="room-content">
          <h2>
            Tìm thấy {searchList.length} kết quả với "{queryValue}"
          </h2>
          {loading ? (
            <Loading />
          ) : (
            <div className="listRooms">
              <Row>
                {searchList.map((data) => (
                  <ListRooms key={data.id} listRooms={data} />
                ))}
              </Row>
            </div>
          )}
        </div>
        {pagination._totalRow > pagination._limit ? (
          <Row>
            <Paginations
              pagination={pagination}
              onPageChange={handerPageChange}
            />
          </Row>
        ) : null}
        <Footer />
      </div>
    </>
  );
}
