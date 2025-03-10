export default function OrderCard({ orderId, price, status }) {
  return (
    <div className="card mb-3" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{orderId}</h5>
            <p className="card-text">{price}</p>
            <p className="card-text">
              <small className="text-muted">{status}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
