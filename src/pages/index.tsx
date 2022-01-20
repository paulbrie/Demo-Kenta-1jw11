import React from 'react'
import store from '../store/index'

const CustomPage = () => {
    const count = store.count.hook()
    return <div>
        ESM Previewer
        <p>{count}</p>
        <button onClick={() => store.count.next(count + 1)}>Add 1</button>
    </div>
}

export default CustomPage