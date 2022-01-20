import React from 'react'
import store from '../store/index'

const Demo = ({ color }: { color: string }) => {
    const count = store.count.hook()
    return <div style={{ color: color || ''}}>Demo
        {count}
        <button onClick={() => store.count.next(count + 1)}>Add 1</button>
    </div>
}

export default Demo