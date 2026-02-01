interface GoogleMapProps {
  address: string
  lat?: number
  lng?: number
  zoom?: number
}

export default function GoogleMap({
  address,
  lat = 40.7128,
  lng = -74.006,
  zoom = 15,
}: GoogleMapProps) {
  // Create embed URL for Google Maps iframe
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${lat}%2C${lng}!5e0!3m2!1sen!2sus!4v1234567890123`

  return (
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0, borderRadius: '0.5rem' }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={embedUrl}
      title={`Map of ${address}`}
    />
  )
}
