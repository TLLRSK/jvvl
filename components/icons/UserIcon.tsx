import React from "react";

function UserIcon({ className = '' }:{ className?: string }) {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" className={className}>
      <path
        d="M12 4.5C13.0609 4.5 14.0783 4.92143 14.8284 5.67157C15.5786 6.42172 16 7.43913 16 8.5C16 9.56087 15.5786 10.5783 14.8284 11.3284C14.0783 12.0786 13.0609 12.5 12 12.5C10.9391 12.5 9.92172 12.0786 9.17157 11.3284C8.42143 10.5783 8 9.56087 8 8.5C8 7.43913 8.42143 6.42172 9.17157 5.67157C9.92172 4.92143 10.9391 4.5 12 4.5ZM12 6.5C11.4696 6.5 10.9609 6.71071 10.5858 7.08579C10.2107 7.46086 10 7.96957 10 8.5C10 9.03043 10.2107 9.53914 10.5858 9.91421C10.9609 10.2893 11.4696 10.5 12 10.5C12.5304 10.5 13.0391 10.2893 13.4142 9.91421C13.7893 9.53914 14 9.03043 14 8.5C14 7.96957 13.7893 7.46086 13.4142 7.08579C13.0391 6.71071 12.5304 6.5 12 6.5ZM12 13.5C14.67 13.5 20 14.83 20 17.5V20.5H4V17.5C4 14.83 9.33 13.5 12 13.5ZM12 15.4C9.03 15.4 5.9 16.86 5.9 17.5V18.6H18.1V17.5C18.1 16.86 14.97 15.4 12 15.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default UserIcon;
