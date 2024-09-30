import React from "react"
import ContentLoader from "react-content-loader"

function MyLoader (props){ 
    return(
 <>
 <ContentLoader 
    speed={1}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="31" cy="31" r="15" /> 
    <rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
    <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
    <rect x="12" y="68" rx="2" ry="2" width="400" height="388" />
  </ContentLoader>
  <br />
  <ContentLoader 
    speed={1}
    width={300}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="31" cy="31" r="15" /> 
    <rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
    <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
    <rect x="12" y="68" rx="2" ry="2" width="400" height="388" />
  </ContentLoader>
  <br />
  <ContentLoader 
    speed={1}
    width={300}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="31" cy="31" r="15" /> 
    <rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
    <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
    <rect x="12" y="68" rx="2" ry="2" width="400" height="388" />
  </ContentLoader>
 </>
)
}
export default MyLoader

