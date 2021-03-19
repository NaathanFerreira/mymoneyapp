import React from 'react'

export default props => {

    function toCssClasses(colsNumbers){
        const cols = colsNumbers ? colsNumbers.split(' ') : []
        let classes = ''

        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[4]) classes += ` col-lg-${cols[3]}`

        return classes

    }

    const gridClasses = toCssClasses(props.cols || '12')

    return (
        <div className={gridClasses}>
            {props.children}
        </div>
    )
}