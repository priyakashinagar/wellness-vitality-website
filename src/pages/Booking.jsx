import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Button,
  Checkbox,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Fade,
  Grid,
  Paper,
  Radio,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  stepConnectorClasses,
} from '@mui/material'
import { ThemeProvider, createTheme, styled } from '@mui/material/styles'
import AccessTime from '@mui/icons-material/AccessTime'
import ArrowBack from '@mui/icons-material/ArrowBack'
import ArrowForward from '@mui/icons-material/ArrowForward'
import AutoFixHigh from '@mui/icons-material/AutoFixHigh'
import Bloodtype from '@mui/icons-material/Bloodtype'
import Business from '@mui/icons-material/Business'
import CalendarMonth from '@mui/icons-material/CalendarMonth'
import CheckCircle from '@mui/icons-material/CheckCircle'
import CreditCard from '@mui/icons-material/CreditCard'
import Elderly from '@mui/icons-material/Elderly'
import HealthAndSafety from '@mui/icons-material/HealthAndSafety'
import LocalHospital from '@mui/icons-material/LocalHospital'
import Science from '@mui/icons-material/Science'
import ShieldOutlined from '@mui/icons-material/ShieldOutlined'
import Videocam from '@mui/icons-material/Videocam'
import {
  appointmentTypes,
  customAddons,
  customBases,
  customBoosters,
  ivPackages,
  nurses,
  servicePackages,
  services,
  stepHeadings,
  stepNames,
  timeSlots,
} from '../data/booking'

const serviceIcons = {
  science: <Science />,
  health: <HealthAndSafety />,
  hospital: <LocalHospital />,
  business: <Business />,
  elderly: <Elderly />,
  blood: <Bloodtype />,
  teeth: <AutoFixHigh />,
}

const theme = createTheme({
  palette: {
    primary: { main: '#ca1254' },
    secondary: { main: '#3b3f69' },
    background: { default: '#f7f7fc' },
  },
  typography: {
    fontFamily: "'DM Sans', 'Inter', -apple-system, sans-serif",
    h4: { fontWeight: 800, letterSpacing: '-0.03em' },
    h5: { fontWeight: 800, letterSpacing: '-0.025em' },
    h6: { fontWeight: 700, letterSpacing: '-0.01em' },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 700, borderRadius: 4, boxShadow: 'none', '&:hover': { boxShadow: 'none' } },
        containedPrimary: {
          backgroundColor: '#ca1254',
          color: '#fff',
          padding: '12px 32px',
          '&:hover': { backgroundColor: '#a80e47', transform: 'translateY(-1px)' },
          '&:disabled': { background: '#e8e8f0', color: '#b0b0c8' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
          border: '1.5px solid #ededf5',
          borderRadius: 20,
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: '#ffffff',
            '& fieldset': { borderColor: '#e8e8f0', borderWidth: 1.5 },
            '&:hover fieldset': { borderColor: '#ca1254' },
            '&.Mui-focused fieldset': { borderColor: '#ca1254', borderWidth: 2 },
            '&.Mui-error fieldset': { borderColor: '#d32f2f' },
          },
        },
      },
    },
  },
})

const Connector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: { top: 18 },
  [`&.${stepConnectorClasses.active}`]: { [`& .${stepConnectorClasses.line}`]: { borderColor: '#ca1254' } },
  [`&.${stepConnectorClasses.completed}`]: { [`& .${stepConnectorClasses.line}`]: { borderColor: '#ca1254' } },
  [`& .${stepConnectorClasses.line}`]: { borderColor: '#e8e8f0', borderTopWidth: 2, borderRadius: 1 },
}))

const StepIconRoot = styled('div')(({ ownerState }) => ({
  width: 36,
  height: 36,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  fontSize: '0.75rem',
  fontWeight: 800,
  fontFamily: "'DM Sans', sans-serif",
  transition: 'all 0.3s ease',
  ...(ownerState.completed && { background: '#ca1254', color: '#fff' }),
  ...(ownerState.active && { background: '#ca1254', color: '#fff', boxShadow: '0 0 0 4px rgba(202,18,84,0.15)' }),
  ...(!ownerState.active && !ownerState.completed && { background: '#f0f0f7', color: '#9999b0' }),
}))

function StepIcon({ active, completed, icon }) {
  return (
    <StepIconRoot ownerState={{ active, completed }}>
      {completed ? <CheckCircle sx={{ fontSize: 18 }} /> : icon}
    </StepIconRoot>
  )
}

const emptyBooking = {
  selectedServices: [],
  selectedPackages: [],
  selectedNurse: null,
  appointmentType: null,
  userDetails: { name: '', email: '', phone: '', address: '' },
  selectedDate: '',
  selectedTime: '',
}
const untouched = { name: false, email: false, phone: false, address: false }

const selectableCard = (selected) => ({
  p: 3,
  border: '1.5px solid',
  borderColor: selected ? '#ca1254' : '#ededf5',
  bgcolor: selected ? '#fef5f8' : 'white',
  borderRadius: 4,
  cursor: 'pointer',
  transition: 'all 0.25s ease',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '&:hover': { borderColor: '#ca1254', transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(202,18,84,0.08)' },
})

const captionLabel = (mb, color = '#ca1254') => ({
  fontWeight: 700,
  color,
  textTransform: 'uppercase',
  letterSpacing: 1,
  display: 'block',
  mb,
})

const summaryLabel = (mb) => ({ color: '#ca1254', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb })

const infoBox = { p: 2, borderRadius: 3, bgcolor: '#e8f4fd', border: '1px solid #b6daed', textAlign: 'center' }

function CalendlyEmbed({ url }) {
  const [loading, setLoading] = useState(true)
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '700px',
        borderRadius: '24px',
        overflow: 'hidden',
        background: '#fff',
        border: '1px solid rgba(202,18,84,0.1)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
      }}
    >
      {loading && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div style={{ position: 'relative', marginBottom: '2rem' }}>
            <div
              style={{
                width: 56,
                height: 56,
                border: '3px solid rgba(59,63,105,0.08)',
                borderTop: '3px solid #ca1254',
                borderRadius: '50%',
                animation: 'spin 0.9s linear infinite',
              }}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#3b3f69', fontWeight: 700, fontSize: '1.1rem', margin: '0 0 6px' }}>Loading Booking Calendar</h3>
            <p style={{ color: '#9999b0', fontSize: '0.85rem', margin: 0 }}>Connecting to Calendly…</p>
          </div>
          <style>{'@keyframes spin { to { transform: rotate(360deg); } }'}</style>
        </div>
      )}
      <iframe
        src={url}
        width="100%"
        height="100%"
        frameBorder="0"
        onLoad={() => setLoading(false)}
        style={{ position: 'relative', zIndex: 10, width: '100%', minHeight: '700px', transition: 'opacity 0.8s ease', opacity: loading ? 0 : 1 }}
        title="Wellness Vitality Booking — Calendly"
        loading="lazy"
        allow="camera; microphone"
      />
    </div>
  )
}

function packageGroupsFor(service) {
  if (service.id === 'iv-infusions') return [{ title: 'IV Infusion Services', items: ivPackages }]
  if (service.id === 'custom-iv-drips')
    return [
      { title: 'Base Formulations', items: customBases },
      { title: 'Service Add-ons', items: customAddons },
      { title: 'Boosters Menu', items: customBoosters },
    ]
  if (servicePackages[service.id]) return [{ title: `${service.title} Options`, items: servicePackages[service.id] }]
  return []
}

export default function Booking() {
  const [step, setStep] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [booking, setBooking] = useState(emptyBooking)
  const [touched, setTouched] = useState(untouched)
  const [minDate] = useState(() => new Date().toISOString().split('T')[0])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [step])

  const update = (key, value) => setBooking((b) => ({ ...b, [key]: value }))
  const touch = (key) => setTouched((t) => ({ ...t, [key]: true }))
  const updateDetails = (key) => (e) => update('userDetails', { ...booking.userDetails, [key]: e.target.value })

  const isTele = booking.appointmentType?.id === 'teleconsultation'
  const needsAddress = booking.appointmentType?.id === 'home-visit' || booking.appointmentType?.id === 'corporate-visit'
  const total = booking.selectedPackages.reduce((sum, p) => sum + p.price, 0)

  const detailErrors = () => {
    const errors = {}
    const d = booking.userDetails
    if (!d.name.trim()) errors.name = 'Full name is required'
    if (!d.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = 'Valid email is required'
    if (!d.phone.match(/^\+?[\d\s-]{8,}$/)) errors.phone = 'Valid phone number is required'
    if (needsAddress && !d.address.trim()) errors.address = 'Service address is required'
    return errors
  }

  const toggleService = (service) => {
    setBooking((b) => {
      const selected = b.selectedServices.find((s) => s.id === service.id)
      if (!selected) return { ...b, selectedServices: [...b.selectedServices, service] }
      const owned = packageGroupsFor(service).flatMap((g) => g.items)
      return {
        ...b,
        selectedServices: b.selectedServices.filter((s) => s.id !== service.id),
        selectedPackages: b.selectedPackages.filter((p) => !owned.find((o) => o.id === p.id)),
      }
    })
  }

  const togglePackage = (pkg) => {
    setBooking((b) => ({
      ...b,
      selectedPackages: b.selectedPackages.find((p) => p.id === pkg.id)
        ? b.selectedPackages.filter((p) => p.id !== pkg.id)
        : [...b.selectedPackages, pkg],
    }))
  }

  // UI only: no payment/booking backend, so a short delay stands in for the API call.
  const submitBooking = () => {
    setSubmitting(true)
    setError('')
    setTimeout(() => {
      setSubmitting(false)
      setConfirmed(true)
    }, 1000)
  }

  const resetBooking = () => {
    setStep(0)
    setConfirmed(false)
    setBooking(emptyBooking)
    setTouched(untouched)
  }

  const canContinue = () => {
    switch (step) {
      case 0:
        return booking.selectedServices.length > 0
      case 1:
        return booking.selectedPackages.length > 0
      case 2:
        return !!booking.selectedNurse
      case 3:
        return !!booking.appointmentType
      case 4:
        return Object.keys(detailErrors()).length === 0
      case 5:
        return isTele || (booking.selectedDate && booking.selectedTime)
      default:
        return true
    }
  }

  const renderServices = () => (
    <Fade in timeout={400}>
      <Box sx={{ maxWidth: 860, mx: 'auto' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
          {services.map((service) => {
            const selected = !!booking.selectedServices.find((s) => s.id === service.id)
            return (
              <Paper key={service.id} onClick={() => toggleService(service)} elevation={0} sx={selectableCard(selected)}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      bgcolor: selected ? '#ca125420' : '#f4f4fa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {React.cloneElement(serviceIcons[service.icon], { sx: { fontSize: 24, color: selected ? '#ca1254' : '#8888a8' } })}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography color="secondary" sx={{ fontWeight: 700, fontSize: '1.05rem', mb: 0.25 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.5 }}>
                      {service.description}
                    </Typography>
                  </Box>
                  <Checkbox
                    checked={selected}
                    onClick={(e) => e.stopPropagation()}
                    onChange={() => toggleService(service)}
                    color="primary"
                    sx={{ p: 0, mt: 0.25 }}
                  />
                </Box>
                <Box sx={{ mt: 'auto', pt: 1.5, borderTop: '1px solid #ededf5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" color="textSecondary">
                    Starting from
                  </Typography>
                  <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 800 }}>
                    ${service.price}
                  </Typography>
                </Box>
              </Paper>
            )
          })}
        </Box>
        {booking.selectedServices.length > 0 && (
          <Fade in timeout={300}>
            <Box
              sx={{
                mt: 4,
                p: 2.5,
                borderRadius: 3,
                bgcolor: '#fef5f8',
                border: '1.5px solid #ca125420',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                alignItems: 'center',
              }}
            >
              <Typography variant="caption" sx={{ color: '#ca1254', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, mr: 1 }}>
                Selected ({booking.selectedServices.length}):
              </Typography>
              {booking.selectedServices.map((s) => (
                <Chip
                  key={s.id}
                  label={s.title}
                  size="small"
                  onDelete={() => toggleService(s)}
                  sx={{ bgcolor: 'white', border: '1px solid #ca125430', color: '#ca1254', fontWeight: 700 }}
                />
              ))}
            </Box>
          </Fade>
        )}
      </Box>
    </Fade>
  )

  const renderPackages = () => (
    <Fade in timeout={400}>
      <Box sx={{ maxWidth: 860, mx: 'auto' }}>
        <Box sx={{ ...infoBox, mb: 4 }}>
          <Typography variant="body2" sx={{ color: '#1a6fa0', fontWeight: 600 }}>
            🏷️ Confirm your specific services and options. You can select multiple items.
          </Typography>
        </Box>
        {booking.selectedServices.map((service) => {
          const groups = packageGroupsFor(service)
          if (groups.length === 0) return null
          return (
            <Box key={service.id} sx={{ mb: 5 }}>
              {groups.map((group) => (
                <Box key={group.title} sx={{ mb: 4 }}>
                  <Typography variant="h6" color="secondary" sx={{ mb: 2.5, fontWeight: 800 }}>
                    {group.title}
                  </Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                    {group.items.map((pkg) => {
                      const selected = !!booking.selectedPackages.find((p) => p.id === pkg.id)
                      return (
                        <Paper key={pkg.id} onClick={() => togglePackage(pkg)} elevation={0} sx={selectableCard(selected)}>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                            <Box
                              sx={{
                                width: 24,
                                height: 24,
                                borderRadius: '6px',
                                border: selected ? '2px solid #ca1254' : '2px solid #d0d0e0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                bgcolor: selected ? '#ca1254' : 'transparent',
                                mt: 0.25,
                              }}
                            >
                              {selected && <CheckCircle sx={{ fontSize: 18, color: '#fff' }} />}
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography color="secondary" sx={{ fontWeight: 700, fontSize: '1.05rem', mb: 0.25 }}>
                                {pkg.name}
                              </Typography>
                              <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.5 }}>
                                {pkg.desc}
                              </Typography>
                            </Box>
                          </Box>
                          <Box sx={{ mt: 'auto', pt: 1.5, borderTop: '1px solid #ededf5', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 800 }}>
                              {pkg.priceLabel || `$${pkg.price}`}
                            </Typography>
                          </Box>
                        </Paper>
                      )
                    })}
                  </Box>
                </Box>
              ))}
            </Box>
          )
        })}
      </Box>
    </Fade>
  )

  const renderNurse = () => (
    <Fade in timeout={400}>
      <Box sx={{ maxWidth: 720, mx: 'auto' }}>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          {nurses.map((nurse) => {
            const selected = booking.selectedNurse?.id === nurse.id
            return (
              <Paper
                key={nurse.id}
                elevation={0}
                onClick={() => update('selectedNurse', nurse)}
                sx={{
                  p: 4,
                  border: '1.5px solid',
                  borderColor: selected ? '#ca1254' : '#ededf5',
                  bgcolor: selected ? '#fef5f8' : 'white',
                  borderRadius: 5,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  flex: '1 1 280px',
                  maxWidth: 320,
                  minHeight: 380,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(202,18,84,0.1)' },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: 160,
                    height: 160,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    mb: 3,
                    flexShrink: 0,
                    border: selected ? '4px solid #ca1254' : '4px solid #ededf5',
                    transition: 'border-color 0.25s ease',
                  }}
                >
                  <img
                    src={nurse.image}
                    alt={nurse.name}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {selected && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 8,
                        right: 8,
                        bgcolor: '#ca1254',
                        color: 'white',
                        borderRadius: '50%',
                        p: 0.8,
                        display: 'flex',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      }}
                    >
                      <CheckCircle sx={{ fontSize: 22 }} />
                    </Box>
                  )}
                </Box>
                <Typography variant="h6" color="secondary" gutterBottom sx={{ fontWeight: 800 }}>
                  {nurse.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 3, lineHeight: 1.6, px: 1 }} />
                <Box
                  sx={{
                    mt: 'auto',
                    pt: 2,
                    borderTop: '1px solid #ededf5',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 800, color: '#ca1254', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: 0.5 }}
                  >
                    Clinical Expert
                  </Typography>
                  <Radio checked={selected} onChange={() => update('selectedNurse', nurse)} color="primary" sx={{ p: 0 }} />
                </Box>
              </Paper>
            )
          })}
        </Box>
      </Box>
    </Fade>
  )

  const renderAppointment = () => (
    <Fade in timeout={400}>
      <Box sx={{ maxWidth: 620, mx: 'auto' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {appointmentTypes.map((type) => {
            const selected = booking.appointmentType?.id === type.id
            return (
              <Paper
                key={type.id}
                elevation={0}
                onClick={() => update('appointmentType', type)}
                sx={{
                  p: 3,
                  border: '1.5px solid',
                  borderColor: selected ? '#ca1254' : '#ededf5',
                  bgcolor: selected ? '#fef5f8' : 'white',
                  borderRadius: 4,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(202,18,84,0.08)' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 3,
                      bgcolor: selected ? '#ca125420' : '#f4f4fa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0,
                    }}
                  >
                    {type.emoji}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography color="secondary" sx={{ fontWeight: 700, fontSize: '1rem' }}>
                      {type.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mt: 0.25 }}>
                      {type.description}
                    </Typography>
                  </Box>
                  <Radio checked={selected} onChange={() => update('appointmentType', type)} color="primary" sx={{ p: 0 }} />
                </Box>
              </Paper>
            )
          })}
        </Box>
        {isTele && (
          <Fade in timeout={300}>
            <Box sx={{ mt: 3, p: 2.5, borderRadius: 3, bgcolor: '#e8f4fd', border: '1px solid #b6daed' }}>
              <Typography variant="body2" sx={{ color: '#1a6fa0', fontWeight: 600 }}>
                📹 Teleconsultation selected — you'll book a time slot via our secure calendar in a later step.
              </Typography>
            </Box>
          </Fade>
        )}
      </Box>
    </Fade>
  )

  const renderDetails = () => {
    const errors = detailErrors()
    const field = (key, label, props) => (
      <>
        <Typography variant="caption" sx={captionLabel(1, touched[key] && errors[key] ? '#d32f2f' : '#ca1254')}>
          {label}
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          value={booking.userDetails[key]}
          onChange={updateDetails(key)}
          onBlur={() => touch(key)}
          error={touched[key] && !!errors[key]}
          helperText={touched[key] && errors[key]}
          {...props}
        />
      </>
    )
    return (
      <Fade in timeout={400}>
        <Box sx={{ maxWidth: 680, mx: 'auto' }}>
          <Grid container spacing={3}>
            <Grid>{field('name', 'Full Name *', { placeholder: 'e.g. Jane Smith' })}</Grid>
            <Grid>{field('email', 'Email *', { type: 'email', placeholder: 'you@example.com' })}</Grid>
            <Grid>{field('phone', 'Phone Number *', { type: 'tel', placeholder: '+61 400 000 000' })}</Grid>
            {needsAddress && (
              <Grid>
                <Fade in timeout={300}>
                  <Box>{field('address', 'Service Address *', { placeholder: 'Street address, suburb and postcode' })}</Box>
                </Fade>
              </Grid>
            )}
          </Grid>
        </Box>
      </Fade>
    )
  }

  const renderDateTime = () => {
    if (isTele) {
      const url = new URL(booking.selectedNurse?.calendlyUrl || 'https://calendly.com/d/cys5-44x-y4h/meeting')
      if (booking.userDetails.name) url.searchParams.set('name', booking.userDetails.name)
      if (booking.userDetails.email) url.searchParams.set('email', booking.userDetails.email)
      return (
        <Fade in timeout={400}>
          <Box>
            <Box sx={{ mb: 3, textAlign: 'center' }}>
              <Chip
                icon={<Videocam sx={{ fontSize: 16 }} />}
                label={`Teleconsultation with ${booking.selectedNurse?.name || 'Practitioner'} — Select a time slot via Calendly`}
                sx={{ bgcolor: '#e8f4fd', color: '#1a6fa0', fontWeight: 700, fontSize: '0.8rem', py: 2.5, px: 1.5, '& .MuiChip-icon': { color: '#1a6fa0' } }}
              />
            </Box>
            <Paper sx={{ bgcolor: 'white', p: { xs: 1, md: 4 }, borderRadius: 4, border: '1.5px solid #ededf5', overflow: 'hidden' }}>
              <CalendlyEmbed url={url.toString()} />
            </Paper>
          </Box>
        </Fade>
      )
    }
    return (
      <Fade in timeout={400}>
        <Box>
          <Box sx={{ maxWidth: 840, mx: 'auto' }}>
            <Grid container spacing={4}>
              <Grid>
                <Paper sx={{ p: 3, borderRadius: 4, border: '1.5px solid #ededf5', bgcolor: 'white', height: '100%' }} elevation={0}>
                  <Typography variant="caption" sx={captionLabel(2)}>
                    <CalendarMonth sx={{ fontSize: 18, verticalAlign: 'middle', mr: 0.5, mt: -0.2 }} /> Select Date
                  </Typography>
                  <TextField
                    fullWidth
                    type="date"
                    variant="outlined"
                    value={booking.selectedDate}
                    onChange={(e) => update('selectedDate', e.target.value)}
                    slotProps={{ inputLabel: { shrink: true }, htmlInput: { min: minDate } }}
                    sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#f4f4fa' } }}
                  />
                  <Box sx={{ mt: 4, p: 2, borderRadius: 2, bgcolor: '#fef5f8', border: '1px dashed #ca125440' }}>
                    <Typography variant="body2" sx={{ color: '#ca1254', fontWeight: 600, display: 'flex', gap: 1 }}>
                      <AccessTime sx={{ fontSize: 18 }} /> Appointments run for approximately 2 hours.
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid>
                <Paper sx={{ p: 3, borderRadius: 4, border: '1.5px solid #ededf5', bgcolor: 'white', height: '100%' }} elevation={0}>
                  <Typography variant="caption" sx={captionLabel(2.5)}>
                    <AccessTime sx={{ fontSize: 18, verticalAlign: 'middle', mr: 0.5, mt: -0.2 }} /> Select Time Slot
                  </Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 1.5 }}>
                    {timeSlots.map((slot) => {
                      const selected = booking.selectedTime === slot
                      return (
                        <Paper
                          key={slot}
                          elevation={0}
                          onClick={() => update('selectedTime', slot)}
                          sx={{
                            py: 1.5,
                            px: 1,
                            textAlign: 'center',
                            cursor: 'pointer',
                            borderRadius: 2,
                            border: '1.5px solid',
                            borderColor: selected ? '#ca1254' : '#ededf5',
                            bgcolor: selected ? '#ca1254' : '#f4f4fa',
                            color: selected ? 'white' : '#3b3f69',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              borderColor: '#ca1254',
                              bgcolor: selected ? '#ca1254' : '#fef5f8',
                              color: selected ? 'white' : '#ca1254',
                            },
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: selected ? 700 : 600, fontSize: '0.85rem' }}>
                            {slot}
                          </Typography>
                        </Paper>
                      )
                    })}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Fade>
    )
  }

  const renderSummary = () => (
    <Fade in timeout={400}>
      <Box sx={{ maxWidth: 700, mx: 'auto' }}>
        <Box sx={{ ...infoBox, mb: 4 }}>
          <Typography variant="body2" sx={{ color: '#1a6fa0', fontWeight: 600 }}>
            📋 Review your booking details carefully before proceeding to payment
          </Typography>
        </Box>
        <Box sx={{ p: 4, bgcolor: '#ffffff', borderRadius: 4, mb: 3, border: '1.5px solid #ededf5', boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="caption" sx={summaryLabel(1.5)}>
              Clinical Selections
            </Typography>
            {booking.selectedPackages.map((p) => (
              <Box key={p.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.75 }}>
                <Typography variant="body2" color="secondary" sx={{ fontWeight: 600 }}>
                  {p.name}
                </Typography>
                <Typography variant="body2" color="primary" sx={{ fontWeight: 700 }}>
                  {p.priceLabel || `$${p.price}`}
                </Typography>
              </Box>
            ))}
          </Box>
          <Divider sx={{ my: 2.5 }} />
          <Box sx={{ mb: 3 }}>
            <Typography variant="caption" sx={summaryLabel(1)}>
              Selected Nurse
            </Typography>
            <Typography variant="body1" color="secondary" sx={{ fontWeight: 700 }}>
              {booking.selectedNurse?.name || '—'}
            </Typography>
          </Box>
          <Divider sx={{ my: 2.5 }} />
          <Grid container spacing={3} sx={{ mb: 1 }}>
            <Grid>
              <Typography variant="caption" sx={summaryLabel(0.5)}>
                Appointment Type
              </Typography>
              <Typography variant="body1" color="secondary" sx={{ fontWeight: 700 }}>
                {booking.appointmentType?.title || '—'}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="caption" sx={summaryLabel(0.5)}>
                Date &amp; Time
              </Typography>
              <Typography variant="body1" color="secondary" sx={{ fontWeight: 700 }}>
                {isTele
                  ? 'Scheduled via Calendly'
                  : booking.selectedDate && booking.selectedTime
                    ? `${new Date(booking.selectedDate).toLocaleDateString('en-AU')} | ${booking.selectedTime}`
                    : '—'}
              </Typography>
            </Grid>
          </Grid>
          {needsAddress && (
            <>
              <Divider sx={{ my: 2.5 }} />
              <Box>
                <Typography variant="caption" sx={summaryLabel(0.5)}>
                  Address
                </Typography>
                <Typography variant="body1" color="secondary" sx={{ fontWeight: 700 }}>
                  {booking.userDetails.address || '—'}
                </Typography>
              </Box>
            </>
          )}
          <Divider sx={{ my: 2.5 }} />
          <Grid container spacing={3}>
            {[
              ['Name', booking.userDetails.name],
              ['Email', booking.userDetails.email],
              ['Phone', booking.userDetails.phone],
            ].map(([label, value]) => (
              <Grid key={label}>
                <Typography variant="caption" sx={summaryLabel(0.5)}>
                  {label}
                </Typography>
                <Typography variant="body2" color="secondary" sx={{ fontWeight: 700 }}>
                  {value || '—'}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            p: 3.5,
            borderRadius: 4,
            background: 'linear-gradient(135deg, #3b3f69 0%, #2e3257 100%)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, display: 'block' }}
            >
              Estimated Total
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mt: 0.3 }}>
              Includes all selected services
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ color: '#fff', fontWeight: 900, letterSpacing: '-0.03em' }}>
            ${total}
          </Typography>
        </Box>
      </Box>
    </Fade>
  )

  const renderPayment = () => (
    <Fade in timeout={400}>
      <Box sx={{ maxWidth: 520, mx: 'auto' }}>
        {confirmed ? (
          <Fade in timeout={600}>
            <Box sx={{ textAlign: 'center', py: 6 }}>
              <Box
                sx={{
                  width: 88,
                  height: 88,
                  borderRadius: '50%',
                  bgcolor: '#e6f7ed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                }}
              >
                <CheckCircle sx={{ fontSize: 48, color: '#28a745' }} />
              </Box>
              <Typography variant="h5" color="secondary" sx={{ mb: 1 }}>
                Booking Confirmed!
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ mb: 1, maxWidth: 400, mx: 'auto' }}>
                Thank you for choosing Wellness Vitality Australia. Our clinical team will be in touch shortly to confirm your
                appointment.
              </Typography>
              <Typography variant="body2" sx={{ color: '#ca1254', fontWeight: 700, mb: 4 }}>
                A confirmation email has been sent to {booking.userDetails.email}
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                onClick={resetBooking}
                sx={{ borderRadius: 50, px: 4, py: 1.5, fontWeight: 700, borderWidth: 2 }}
              >
                Book Another Appointment
              </Button>
            </Box>
          </Fade>
        ) : (
          <>
            <Box
              sx={{
                p: 3,
                mb: 4,
                borderRadius: 3,
                bgcolor: '#fef5f8',
                border: '1.5px solid #ca125430',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography variant="caption" sx={{ color: '#ca1254', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
                  Total Due
                </Typography>
                <Typography variant="h5" color="primary" sx={{ fontWeight: 900 }}>
                  ${total}
                </Typography>
              </Box>
              <Chip label="All Inclusive" sx={{ bgcolor: 'white', border: '1px solid #ca125430', color: '#ca1254', fontWeight: 700 }} />
            </Box>
            {error && (
              <Box sx={{ p: 2, mb: 3, borderRadius: 2, bgcolor: '#fff0f0', border: '1px solid #ffcccc', color: '#d32f2f' }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  {error}
                </Typography>
              </Box>
            )}
            <Paper
              elevation={0}
              onClick={() => !submitting && submitBooking()}
              sx={{
                p: { xs: 2.5, sm: 3 },
                mb: 3,
                border: '2px solid #e2e8f0',
                borderRadius: 4,
                bgcolor: '#f8fafc',
                cursor: submitting ? 'default' : 'pointer',
                opacity: submitting ? 0.7 : 1,
                transition: 'all 0.2s',
                '&:hover': submitting
                  ? {}
                  : { borderColor: '#635bff', transform: 'translateY(-2px)', boxShadow: '0 8px 25px rgba(99,91,255,0.15)' },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                    <Typography color="secondary" variant="body1" sx={{ fontWeight: 800 }}>
                      Pay with Stripe
                    </Typography>
                    <Chip
                      label="100% Secure"
                      size="small"
                      sx={{ bgcolor: '#ede9fe', color: '#635bff', fontWeight: 700, fontSize: '0.65rem', height: 20 }}
                    />
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 1.5, maxWidth: 350 }}>
                    Complete your booking safely and instantly using any major credit or debit card.
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="caption" sx={{ fontWeight: 600, color: '#64748b', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CreditCard sx={{ fontSize: 14 }} /> Apple Pay, Google Pay, Visa &amp; Mastercard
                    </Typography>
                  </Box>
                </Box>
                {submitting ? (
                  <CircularProgress size={24} sx={{ color: '#635bff' }} />
                ) : (
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      bgcolor: 'white',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                      flexShrink: 0,
                    }}
                  >
                    <ArrowForward sx={{ fontSize: 20, color: '#635bff' }} />
                  </Box>
                )}
              </Box>
            </Paper>
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center', color: '#8888a8' }}>
              <ShieldOutlined sx={{ fontSize: 14 }} />
              <Typography variant="caption" color="textSecondary">
                Payments are encrypted and processed securely by Stripe
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Fade>
  )

  const steps = [renderServices, renderPackages, renderNurse, renderAppointment, renderDetails, renderDateTime, renderSummary, renderPayment]

  return (
    <ThemeProvider theme={theme}>
      <main style={{ minHeight: '100vh', backgroundColor: '#f7f7fc', position: 'relative' }}>
        <Box
          sx={{
            position: 'sticky',
            top: { xs: 60, sm: 110 },
            mt: 0,
            zIndex: 10,
            bgcolor: '#ffffff',
            borderBottom: '1px solid #ededf5',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
            pt: 0,
            pb: { xs: 1, sm: 2.5 },
            overflow: 'hidden',
          }}
        >
          <Box sx={{ width: '100%', height: 3, bgcolor: '#f0f0f7', mb: { xs: 0.5, sm: 2.5 } }}>
            <Box
              sx={{
                width: `${((step + 1) / stepNames.length) * 100}%`,
                height: '100%',
                bgcolor: '#ca1254',
                transition: 'width 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
                boxShadow: '0 0 10px rgba(202,18,84,0.4)',
              }}
            />
          </Box>
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, px: 3, py: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 800, color: '#ca1254', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Stage {step + 1}: {stepNames[step]}
            </Typography>
            <Typography sx={{ fontWeight: 700, color: '#9999b0', fontSize: '0.65rem' }}>
              {step + 1} / {stepNames.length}
            </Typography>
          </Box>
          <Container maxWidth="md" sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Stepper activeStep={step} alternativeLabel connector={<Connector />}>
              {stepNames.map((name, i) => (
                <Step key={name}>
                  <StepLabel
                    slots={{ stepIcon: StepIcon }}
                    sx={{ '& .MuiStepLabel-label': { fontSize: '0.72rem', fontWeight: 700, mt: 0.5, color: step === i ? '#ca1254' : '#9999b0' } }}
                  >
                    {name}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ pt: 10, pb: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip
              label={`Step ${step + 1} of ${stepNames.length}`}
              size="small"
              sx={{ mb: 2, bgcolor: '#ca125410', color: '#ca1254', fontWeight: 800, fontSize: '0.7rem', letterSpacing: 0.5 }}
            />
            <Typography variant="h4" color="secondary" sx={{ mb: 0.5 }}>
              {stepHeadings[step].label}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 400 }}>
              {stepHeadings[step].sub}
            </Typography>
          </Box>
          {steps[step]()}
        </Container>

        {!confirmed && (
          <Box
            sx={{
              position: 'sticky',
              bottom: 0,
              zIndex: 10,
              py: { xs: 1.5, sm: 2.5 },
              px: { xs: 2, sm: 3 },
              bgcolor: 'rgba(247, 247, 252, 0.98)',
              backdropFilter: 'blur(12px)',
              borderTop: '1px solid rgba(200, 200, 220, 0.4)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: 1.5, sm: 3 },
              boxShadow: '0 -4px 30px rgba(0,0,0,0.06)',
            }}
          >
            {step !== 0 && (
              <Button
                onClick={() => setStep((s) => s - 1)}
                variant="text"
                startIcon={<ArrowBack sx={{ fontSize: 16 }} />}
                sx={{ color: '#9999b0', fontWeight: 700, '&:hover': { color: '#3b3f69', bgcolor: 'transparent' }, px: { xs: 1, sm: 2 } }}
              >
                Back
              </Button>
            )}
            {step < stepNames.length - 1 && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  if (step === 3) setTouched(untouched)
                  setStep((s) => s + 1)
                }}
                disabled={!canContinue()}
                endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
                sx={{
                  minWidth: { xs: 140, sm: 240 },
                  py: { xs: 1.2, sm: 1.5 },
                  fontSize: { xs: '0.85rem', sm: '0.95rem' },
                  borderRadius: '4px !important',
                  boxShadow: 'none',
                  '&:hover': { boxShadow: 'none', bgcolor: '#a80e47' },
                }}
              >
                Continue
              </Button>
            )}
          </Box>
        )}

        <Box sx={{ py: 6, borderTop: '1px solid #ededf5', textAlign: 'center', mt: 0, position: 'relative', zIndex: 1 }}>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 2 }}>
              <Button component={Link} to="/contact" variant="text" size="small" sx={{ color: '#9999b0', fontWeight: 600, fontSize: '0.82rem' }}>
                Clinical Support
              </Button>
              <Button component={Link} to="/faq" variant="text" size="small" sx={{ color: '#9999b0', fontWeight: 600, fontSize: '0.82rem' }}>
                Help Centre
              </Button>
            </Box>
            <Typography variant="caption" color="textSecondary">
              All bookings are subject to clinical availability.
            </Typography>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  )
}
