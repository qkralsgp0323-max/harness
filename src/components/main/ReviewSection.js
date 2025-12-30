// src/components/main/ReviewSection.js
import "./ReviewSection.scss";
import ReviewCard from "./ReviewCard";
import reviewData from "../../assets/data/Review.json";

const ReviewSection = () => {
    const reviews = reviewData?.Review ?? [];

    const normalized = reviews.map((r) => ({
        id: r.id,
        text: r.text,
        prodName: r.prod_name,
        star: r.star,
        date: r.date,
    }));

    const loop = [...normalized, ...normalized];

    return (
        <section className="review-section">
            <div className="review-wrap">
                <div className="re-title">
                    <p>카테고리 별 <span>베스트 리뷰</span></p>
                </div>

                <div className="review-list">
                    <div className="review-track">
                        {loop.map((item, idx) => (
                            <ReviewCard
                                key={`${item.id}-${idx}`}
                                text={item.text}
                                prodName={item.prodName}
                                star={item.star}
                                date={item.date}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;
