import React, {useEffect} from 'react';
import {gradientColorsMap} from '../helpers/mock';

const Chart = ({sections}) => {
    const r = 15.91549430918954;
    const coordinate = 25;
    
    // console.log(sections);
    const total = sections.income;
    const sent = sections.outcome;
    const getPercentage = (total, value) => {
      return Math.round((value / total) * 100)  ;
    };
    let prevDashoffset = 0;
    
    return (
        <div className='chart__wrap'>
            <svg width="200" height="200" viewBox="0 0 50 50" >
                <defs>
                    {gradientColorsMap.map(item => (
                      <linearGradient id={item.key} key={item.key}>
                          <stop offset="0%" stopColor={item.firstColor} stopOpacity="100%"/>
                          <stop offset="100%" stopColor={item.secondColor} stopOpacity="100%" />
                      </linearGradient>
                    ))}
                </defs>
                
               
                
                {/*chart ring*/}
                <circle
                    r={r}
                    cx={coordinate}
                    cy={coordinate}
                    fill='transparent'
                    stroke='#171621'
                    strokeWidth={10} />
    
    
    
                {sections?
                    Object.keys(sent).map((key, index) => {
                        const fillValue = getPercentage(total, sent[key]);
                        const dashOffset = index > 0? prevDashoffset + fillValue : 0;
                        prevDashoffset = dashOffset;
                        return (
                          <circle r={r} cx={coordinate} cy={coordinate}
                                  fill='transparent' key={key}
                                  stroke={`url(#${key})`}
                                  strokeWidth={index%2? 16 : 13}
                                  strokeDasharray={`${fillValue} ${100 - fillValue}`}
                                  strokeDashoffset={dashOffset} />
                        )
                    })
                    : null
                }
                    
                    
                    {/*chart hole*/}
                <circle
                    r={r}
                    cx={coordinate}
                    cy={coordinate}
                    fill='#1d1e29' />
            </svg>
        </div>
    );
};

export default Chart;
