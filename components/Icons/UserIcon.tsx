function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20 5.5814C15.1193 5.5814 11.1628 9.53795 11.1628 14.4186C11.1628 19.2993 15.1193 23.2558 20 23.2558C24.8807 23.2558 28.8372 19.2993 28.8372 14.4186C28.8372 9.53795 24.8807 5.5814 20 5.5814ZM13.9535 14.4186C13.9535 11.0792 16.6606 8.37209 20 8.37209C23.3394 8.37209 26.0465 11.0792 26.0465 14.4186C26.0465 17.758 23.3394 20.4651 20 20.4651C16.6606 20.4651 13.9535 17.758 13.9535 14.4186Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20 0C8.9543 0 0 8.9543 0 20C0 25.6716 2.36259 30.7937 6.1535 34.4318C9.74572 37.8791 14.6266 40 20 40C25.3734 40 30.2543 37.8791 33.8465 34.4318C37.6374 30.7937 40 25.6716 40 20C40 8.9543 31.0457 0 20 0ZM2.7907 20C2.7907 10.4956 10.4956 2.7907 20 2.7907C29.5044 2.7907 37.2093 10.4956 37.2093 20C37.2093 24.0833 35.7884 27.8332 33.4119 30.7845C31.9346 27.968 28.9834 26.0465 25.5814 26.0465H14.4186C11.0166 26.0465 8.06536 27.968 6.58808 30.7845C4.21157 27.8332 2.7907 24.0833 2.7907 20ZM25.5814 28.8372C28.2491 28.8372 30.5155 30.5659 31.3175 32.9647C28.2911 35.609 24.3337 37.2093 20 37.2093C15.6663 37.2093 11.7089 35.609 8.68254 32.9647C9.48448 30.5659 11.7509 28.8372 14.4186 28.8372H25.5814Z'
      />
    </svg>
  );
}

export default UserIcon;
