export function ImageWrapper({ children }) {
  return (
    <div className="image-wrapper">
      <div className="image-wrapper__full-size-container">
        {children}
      </div>
    </div>
  )
}
