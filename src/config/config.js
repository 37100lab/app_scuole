export const url =
  process.env.NODE_ENV === 'development'
    ? 'https://37100lab.it/geoserver/geoapp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geoapp:scuole&outputFormat=application/json'
    : `https://37100lab.it/geoserver/geoapp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geoapp:scuole&outputFormat=application/json`
