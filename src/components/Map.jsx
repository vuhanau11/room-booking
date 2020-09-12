import React, { useRef, useLayoutEffect } from 'react'

const Map = ({ location, zoomLevel }) => {
  const mapRef = useRef(null)
  useLayoutEffect(() => {
    if (!mapRef.current) return
    const H = window.H
    const platform = new H.service.Platform({
      apikey: process.env.REACT_APP_API_KEY,
    })
    const defaultLayers = platform.createDefaultLayers()
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: location,
      zoom: zoomLevel,
      pixelRatio: window.devicePixelRatio || 1,
    })

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap))
    const circle = new H.map.Circle(location, 300)
    hMap.addObject(circle)
    const ui = H.ui.UI.createDefault(hMap, defaultLayers)

    // This will act as a cleanup to run once this hook runs again.
    // This includes when the component un-mounts
    return () => {
      hMap.dispose()
    }
  }, [mapRef])
  return (
    <div
      className="map"
      ref={mapRef}
      style={{ height: '45vh', marginBottom: '1rem' }}
    />
  )
}

export default Map
