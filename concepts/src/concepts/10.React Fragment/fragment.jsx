import React from 'react';

export class ReactF1 extends React.Component{
    render()
    {
        return(
            <div>
                <table>
                    <tr>
                        <ReactF2></ReactF2>
                    </tr>
                </table>
            </div>
        )
    }
}

class ReactF2 extends React.Component{
    render()
    {
        return(
            <>
            <td>hello</td>
            <td>hello</td>
            </>
        )
    }
}