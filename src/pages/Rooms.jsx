import React from 'react'
import Service from '../services/ApiService'
import Navbar from '../components/Navbar'

import { Row } from 'antd'
import { useQuery } from 'react-query'
import Loading from '../components/Loading'

import '../styles/Rooms.css'
import 'antd/dist/antd.css'
import Footer from '../components/Footer'
import ListRooms from '../components/ListRooms'
import NotFound from '../components/NotFound'

export default function Rooms(props) {
  const id = props.match.params.id

  const getCityId = async () => {
    const cityIdData = await Service.getCityById(id)
    return cityIdData
  }
  const getRooms = async () => {
    const roomsData = await Service.getRooms(id)
    return roomsData
  }

  const { status: cityStatus, data: cityData } = useQuery('cityId', getCityId)
  const { status: roomsStatus, data: roomsData } = useQuery('rooms', getRooms)
  if (cityStatus === 'loading' || roomsStatus === 'loading') return <Loading />
  if (cityStatus === 'error' || roomsStatus === 'error') return <NotFound />
  const cityId = cityData.data
  const rooms = roomsData.data

  return (
    <>
      <Navbar />
      <div className="body">
        <div className="room-content">
          <h2>
            {cityId.num} homestay tại {cityId.title}
          </h2>
          <div className="listRooms">
            <Row>
              {rooms.map((data) => (
                <ListRooms key={data.id} listRooms={data} />
              ))}
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
