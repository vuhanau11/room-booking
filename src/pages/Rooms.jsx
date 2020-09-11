import React, { useState, useEffect } from 'react'
import Service from '../services/ApiService'
import Navbar from '../components/Navbar'

import { Row } from 'antd'
import Loading from '../components/Loading'

import '../styles/Rooms.css'
import 'antd/dist/antd.css'
import Footer from '../components/Footer'
import ListRooms from '../components/ListRooms'

export default function Rooms(props) {
  const [cityId, setCityId] = useState({})
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)

  const getCityId = (cityId) => {
    Service.getCityById(cityId)
      .then((res) => {
        setCityId(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const getRooms = (roomId) => {
    Service.getRooms(roomId)
      .then((res) => {
        setRooms(res.data)
        setLoading(false)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getCityId(props.match.params.id)
    getRooms(props.match.params.id)
  }, [props.match.params.id])

  return (
    <>
      <Navbar />
      <div className="body">
        <div className="room-content">
          <h2>
            {cityId.num} homestay tại {cityId.title}
          </h2>
          {loading ? (
            <Loading />
          ) : (
            <div className="listRooms">
              <Row>
                {rooms.map((data) => (
                  <ListRooms key={data.id} listRooms={data} />
                ))}
              </Row>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  )
}
