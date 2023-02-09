
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CircularColor from'./Loader'


const WeatherCard=(props)=>{
    // eslint-disable-next-line eqeqeq
    // if(props.api==='u'){
        console.log('yes')
        return <div className='color'>
            <Card className='card' id='card'>
                <CardContent >
                    <h3>yazan ZarZar</h3>
                    <h3>{props.weather}</h3>
                    <div className='Flex hiden'id='loader' >
                        <CircularColor></CircularColor>
                    </div>   
                </CardContent>

            </Card>


        </div>
    // }
    // else{
     
    // }
  
}
export default WeatherCard