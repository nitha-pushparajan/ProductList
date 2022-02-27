function Review({value}) {
    const ratingIcons = [];
    const fullStarCount = value - (value % 1);
    if(value != null)
        for (let index = 0; index < 5; index += 1) {
        const ratingClass = (index < fullStarCount && 'active') || '';
        ratingIcons.push(ratingClass);
        }
  
    if (value % 1) {
      ratingIcons[fullStarCount] = 'middle';
    }
  
    return (
        <div className="review-set">
            <div className="review" title={`${value} out of 5 stars`}>
                { ratingIcons.map((starClass, index) =>
                <span key={index} className={`review_star ${starClass}`} type={starClass} label="review star" ></span>
                )}
            </div>            
        </div>
    );
  }
  
  export default Review;