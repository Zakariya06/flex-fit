
import Link from "next/link"
import { useState } from "react" 

export default function ToggleForm() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className="d-flex justify-content-between align-items-center w-100 toggleFormContainer" >
      <div className="form-check form-switch d-flex align-items-center gap-2">
        <input
          className={`form-check-input  toggleSwitch `}
          type="checkbox"
          role="switch"
          id="rememberMe"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label className="form-check-label text-secondary" htmlFor="rememberMe">
          Remember me
        </label>
      </div>
      <Link href={"/Sign_Up_Basic/set_password"} className={"recoverLink"}>
        Recover Password
      </Link>
    </div>
  )
}

