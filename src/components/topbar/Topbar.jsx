import { NotificationsNone } from '@material-ui/icons'
import React from 'react'
import "./topbar.css"

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
              <span className="logo">Makieuadmin</span>
              </div>
            <div className="topRight">
              <div className="topbariconContainer">
              <NotificationsNone/>
              <span className="topIconBadge">2</span>

          </div>
        </div>
        </div>
        </div>
  )
}
