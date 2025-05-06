export default function OrderCard({ orderId, name, quantity, total, status }) {
  return (
    <div className="container my-4">
      <div className="row text-center ">
        <div className="col-12 col-md-2 border p-2">Order ID</div>
        <div className="col-12 col-md-2 border p-2">Product</div>
        <div className="col-12 col-md-2 border p-2">Qty</div>
        <div className="col-12 col-md-2 border p-2">Total Price ($)</div>
        <div className="col-12 col-md-2 border p-2">Status</div>
      </div>

      <div className="row text-center">
        <div className="col-12 col-md-2 border p-2">{orderId}</div>
        <div className="col-12 col-md-2 border p-2">{name}</div>
        <div className="col-12 col-md-2 border p-2">{quantity}</div>
        <div className="col-12 col-md-2 border p-2">{total}</div>
        <div className="col-12 col-md-2 border p-2">{status}</div>
      </div>
    </div>
  );
}
