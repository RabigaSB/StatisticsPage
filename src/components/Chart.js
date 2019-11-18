import React from 'react';

const Chart = ({sections}) => {
    const r = 15.91549430918954;
    const coordinate = 25;

    console.log(sections);
    return (
        <div>
            <svg width="200" height="200" viewBox="0 0 50 50" >
                <defs>
                    <linearGradient id="gradient">
                        <stop offset="70%" stopColor="blue" stopOpacity="0%"/>
                        <stop offset="100%" stopColor="green" stopOpacity="78%" />
                    </linearGradient>
                    <linearGradient id="gradient2">
                        <stop offset="70%" stopColor="yellow" stopOpacity="0%"/>
                        <stop offset="100%" stopColor="orange" stopOpacity="78%" />
                    </linearGradient>
                </defs>

                <circle
                    r={r}
                    cx={coordinate}
                    cy={coordinate}
                    fill='transparent'
                    stroke='grey'
                    strokeWidth={10} />

                <circle
                    r={r}
                    cx={coordinate}
                    cy={coordinate}
                    fill='transparent'
                    stroke='red'
                    strokeWidth={16}
                    strokeDasharray="45 55"
                    strokeDashoffset="0" />
                <circle
                    r={r}
                    cx={coordinate}
                    cy={coordinate}
                    fill='transparent'
                    stroke='url(#gradient)'
                    strokeWidth={13}
                    strokeDasharray="25 75"
                    strokeDashoffset="25" />
                <circle
                    r={r}
                    cx={coordinate}
                    cy={coordinate}
                    fill='transparent'
                    stroke='url(#gradient2)'
                    strokeWidth={16}
                    strokeDasharray="10 90"
                    strokeDashoffset="35" />

                <circle
                    r={r}
                    cx={coordinate}
                    cy={coordinate}
                    fill='#161823' />
            </svg>
        </div>
    );
};

export default Chart;
