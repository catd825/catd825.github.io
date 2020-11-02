import React from 'react'

class WorkContainer extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Row oriented table</h2>
                    <div class="Rtable Rtable--4cols">

                    <div class="Rtable-cell"><h3>Eddard Stark</h3></div>
                    <div class="Rtable-cell">Has a sword named Ice</div>
                    <div class="Rtable-cell">No direwolf</div>
                    <div class="Rtable-cell"><strong>Lord of Winterfell</strong></div>

                    <div class="Rtable-cell"><h3>Jon Snow</h3></div>
                    <div class="Rtable-cell">Has a sword named Longclaw</div>
                    <div class="Rtable-cell">Direwolf: Ghost</div>
                    <div class="Rtable-cell"><strong>Knows nothing</strong></div>

                    <div class="Rtable-cell"><h3>Arya Stark</h3></div>
                    <div class="Rtable-cell">Has a sword named Needle</div>
                    <div class="Rtable-cell">Direwolf: Nymeria</div>
                    <div class="Rtable-cell"><strong>No one</strong></div>

                    </div>
            </div>
        )
    }
}

export default WorkContainer