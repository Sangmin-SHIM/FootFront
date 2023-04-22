import { ResponsiveWaffle } from '@nivo/waffle'
import '../../styles/index.css'
import champion from '../../assets/icon/champion.png'
import fc from '../../assets/icon/fc.png'
import stadium from '../../assets/icon/stadium.png'

const CustomTooltip = node => (
    <div className='px-2 '
        style={{
            color: node.color,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridColumnGap: '1px',
            backgroundColor: '#393a3e',
        }}
    >
        <span style={{ fontWeight: 600 }}>
            <div className='ml-12 my-3'>
                <img className='w-8 h-8' src={champion}/>
            </div>
        </span>
        <span className='my-3'>{node.value} fois</span>

        <span style={{ fontWeight: 600 }}>
            <div className='ml-12 mb-3'>
                <img className='w-8 h-8' src={fc}/>
            </div>            
        </span>
        <span>{node.label}</span>
        
        <span className='flex flex-col justify-center align-center' style={{ fontWeight: 600 }}>
            Season
            <div className='ml-12 mb-3'>
                <img className='w-8 h-8' src={stadium}/>
            </div>  
        </span>
        
        <span>{node.season.map((value,index) => {
                if(index == node.season.length-1) {
                  return  value 
                }  
                return  value + ', ' 
                
            })}
        </span>
    </div>
)

const WaffleChart = ({ data }) => (
    <ResponsiveWaffle
        data={data}
        total={20}
        rows={4}
        columns={5}
        width={550} 
        height={310} 
        fillDirection="left"
        margin={{ top: 10, right: -10, bottom: 10, left: 80 }}
        colors={{ scheme: 'accent' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.3
                ]
            ]
        }}
        animate={true}
        motionStiffness={90}
        motionDamping={20}
        tooltip={CustomTooltip}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                justify: false,
                translateX: -80,
                translateY: 0,
                itemsSpacing: 4,
                itemWidth: 100,
                itemHeight: 30,
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                itemTextColor: '#A8E1DC',
                symbolSize: 30,

            }
        ]}
    />
)

export default WaffleChart