import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Row, Col, Rate } from 'antd';
import Service from '../services/ApiService';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Paginations from '../components/Paginations';
import Loading from '../components/Loading';

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
  const numberFormat = new Intl.NumberFormat();

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
                  <Col key={data.id} md={5} xs={24} className="listRooms-col">
                    <Link to={`/rooms/${data.id}`}>
                      <div className="listRooms-image">
                        <img alt="rooms" src={data.imgUrl} />
                      </div>
                    </Link>
                    <div className="listRooms-name">
                      <p className="room-type">{data.category}</p>
                      <Link to={`/rooms/${data.id}`}>
                        <h3>{data.name}</h3>
                      </Link>
                      <p>{data.size}</p>
                      <p className="room-price">
                        {numberFormat.format(data.price)}
                        <u>đ</u>/đêm
                      </p>
                      <p>{data.address}</p>
                      <span>
                        <Rate allowHalf defaultValue={data.rating} disabled />
                        {data.review_count}
                      </span>
                    </div>
                  </Col>
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
