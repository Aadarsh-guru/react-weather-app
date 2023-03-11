import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import OpacityIcon from '@mui/icons-material/Opacity';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloudIcon from '@mui/icons-material/Cloud';

const information = ({ results }) => {
  return (
    results && Object.keys(results).length > 0 ?
      <Box style={{ margin: '30px 60px' }} >
        <Typography style={{ padding: 10, fontSize: 20, letterSpacing: 2 }}><LocationOnIcon style={{ marginRight: 10 }} />Location: {results.name}, {results.sys.country}</Typography>
        <Typography style={{ padding: 10, fontSize: 20, letterSpacing: 2 }}><SettingsBrightnessIcon style={{ marginRight: 10 }} />Temprature: {results.main.temp}</Typography>
        <Typography style={{ padding: 10, fontSize: 20, letterSpacing: 2 }}><OpacityIcon style={{ marginRight: 10 }} />Humidity: {results.main.humidity} </Typography>
        <Typography style={{ padding: 10, fontSize: 20, letterSpacing: 2 }}><Brightness5Icon style={{ marginRight: 10 }} />Sun Rise: {new Date(results.sys.sunrise * 1000).toLocaleTimeString()} </Typography>
        <Typography style={{ padding: 10, fontSize: 20, letterSpacing: 2 }}><Brightness6Icon style={{ marginRight: 10 }} />Sun Set: {new Date(results.sys.sunset * 1000).toLocaleTimeString()} </Typography>
        <Typography style={{ padding: 10, fontSize: 20, letterSpacing: 2 }}><DehazeIcon style={{ marginRight: 10 }} />Humidity: {results.weather[0].main} </Typography>
        <Typography style={{ padding: 10, fontSize: 20, letterSpacing: 2 }}><CloudIcon style={{ marginRight: 10 }} />Clouds: {results.clouds.all}% </Typography>
      </Box>
      : <Typography style={{color:'red', margin:100, padding:50, fontWeight: 700}} >
        Please Enter the values to check weather.
      </Typography>
  )
}

export default information