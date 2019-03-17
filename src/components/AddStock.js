import React from 'react'
import { connect } from 'react-redux';


function AddStock(props) {
    const stock = props.stock
    this.props.addStock(this.state.stock);

    return (
        <div>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addStock: (chart) => {dispatch({type:'CONSOLE_LOG', chart: chart})}
}
}

export default connect(null, mapDispatchToProps)(AddStock)