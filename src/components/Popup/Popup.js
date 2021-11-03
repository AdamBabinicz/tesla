import React from "react"
import "./Popup.css"

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <span aria-label="Close" role="img">
            ❌
          </span>
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  )
}

export default Popup
