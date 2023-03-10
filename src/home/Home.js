import { toast } from "react-toast"

export default function Home() {
	const wave = () => toast('Hi there 👋')
	return (
		<div className="page-wrapper">
			<div className="page-content">
				{/* First home line */}
				<div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
					<div className="col">
						<div className="card radius-10 border-start border-0 border-3 border-info">
							<div className="card-body">
								<div className="d-flex align-items-center">
									<div>
										<p className="mb-0 text-secondary">Total Orders</p>
										<h4 className="my-1 text-info">4805</h4>
										<p className="mb-0 font-13">+2.5% from last week</p>
									</div>
									<div className="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto"><i
										className='bx bxs-cart'></i>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card radius-10 border-start border-0 border-3 border-danger">
							<div className="card-body">
								<div className="d-flex align-items-center">
									<div>
										<p className="mb-0 text-secondary">Total Revenue</p>
										<h4 className="my-1 text-danger">$84,245</h4>
										<p className="mb-0 font-13">+5.4% from last week</p>
									</div>
									<div className="widgets-icons-2 rounded-circle bg-gradient-bloody text-white ms-auto"><i
										className='bx bxs-wallet'></i>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card radius-10 border-start border-0 border-3 border-success">
							<div className="card-body">
								<div className="d-flex align-items-center">
									<div>
										<p className="mb-0 text-secondary">Bounce Rate</p>
										<h4 className="my-1 text-success">34.6%</h4>
										<p className="mb-0 font-13">-4.5% from last week</p>
									</div>
									<div className="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto"><i
										className='bx bxs-bar-chart-alt-2'></i>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card radius-10 border-start border-0 border-3 border-warning">
							<div className="card-body">
								<div className="d-flex align-items-center">
									<div>
										<p className="mb-0 text-secondary">Total Customers</p>
										<h4 className="my-1 text-warning">8.4K</h4>
										<p className="mb-0 font-13">+8.4% from last week</p>
									</div>
									<div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto"><i
										className='bx bxs-group'></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* /First home line */}

				{/* SECOND LINE */}
				<div className="row">
					<div className="col-12 col-lg-8">
						<div className="card radius-10">
							<div className="card-body">
								<div className="d-flex align-items-center">
									<div>
										<h6 className="mb-0" onClick={wave}>Sales Overview</h6>
									</div>
								</div>
								<div className="d-flex align-items-center ms-auto font-13 gap-2 my-3">
									<span className="border px-1 rounded cursor-pointer"><i className="bx bxs-circle me-1"
											style= {{ 'color': '#14abef' }}></i>Sales</span>
									<span className="border px-1 rounded cursor-pointer"><i className="bx bxs-circle me-1"
											style= {{ 'color': '#ffc107' }}></i>Visits</span>
								</div>
								<div className="chart-container-1">
									<canvas id="chart1"></canvas>
								</div>
							</div>
							<div className="row row-cols-1 row-cols-md-3 row-cols-xl-3 g-0 row-group text-center border-top">
								<div className="col">
									<div className="p-3">
										<h5 className="mb-0">24.15M</h5>
										<small className="mb-0">Overall Visitor <span> <i className="bx bx-up-arrow-alt align-middle"></i>
												2.43%</span></small>
									</div>
								</div>
								<div className="col">
									<div className="p-3">
										<h5 className="mb-0">12:38</h5>
										<small className="mb-0">Visitor Duration <span> <i className="bx bx-up-arrow-alt align-middle"></i>
												12.65%</span></small>
									</div>
								</div>
								<div className="col">
									<div className="p-3">
										<h5 className="mb-0">639.82</h5>
										<small className="mb-0">Pages/Visit <span> <i className="bx bx-up-arrow-alt align-middle"></i>
												5.62%</span></small>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-4">
						<div className="card radius-10">
							<div className="card-body">
								<div className="d-flex align-items-center">
									<div>
										<h6 className="mb-0">Trending Products</h6>
									</div>
								</div>
								<div className="chart-container-2 mt-4">
									<canvas id="chart2"></canvas>
								</div>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item d-flex bg-transparent justify-content-between align-items-center">Jeans <span
										className="badge bg-success rounded-pill">25</span>
								</li>
								<li className="list-group-item d-flex bg-transparent justify-content-between align-items-center">T-Shirts
									<span className="badge bg-danger rounded-pill">10</span>
								</li>
								<li className="list-group-item d-flex bg-transparent justify-content-between align-items-center">Shoes <span
										className="badge bg-primary rounded-pill">65</span>
								</li>
								<li className="list-group-item d-flex bg-transparent justify-content-between align-items-center">Lingerie
									<span className="badge bg-warning text-dark rounded-pill">14</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* SECOND LINE */}

				<div className="card radius-10">
					<div className="card-body">
						<div className="d-flex align-items-center">
							<div>
								<h6 className="mb-0">Recent Orders</h6>
							</div>
						</div>
						<div className="table-responsive">
							<table className="table align-middle mb-0">
								<thead className="table-light">
									<tr>
										<th>Product</th>
										<th>Photo</th>
										<th>Product ID</th>
										<th>Status</th>
										<th>Amount</th>
										<th>Date</th>
										<th>Shipping</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Iphone 5</td>
										<td><img src="/assets/images/products/01.png" className="product-img-2" alt="product img" /></td>
										<td>#9405822</td>
										<td><span className="badge bg-gradient-quepal text-white shadow-sm w-100">Paid</span></td>
										<td>$1250.00</td>
										<td>03 Feb 2020</td>
										<td>
											<div className="progress" style={{ 'height': '6px' }}>
												<div className="progress-bar bg-gradient-quepal" role="progressbar" style={{ 'width': '100%' }}></div>
											</div>
										</td>
									</tr>

									<tr>
										<td>Earphone GL</td>
										<td><img src="/assets/images/products/02.png" className="product-img-2" alt="product img" /></td>
										<td>#8304620</td>
										<td><span className="badge bg-gradient-blooker text-white shadow-sm w-100">Pending</span></td>
										<td>$1500.00</td>
										<td>05 Feb 2020</td>
										<td>
											<div className="progress" style={{ 'height': '6px' }}>
												<div className="progress-bar bg-gradient-blooker" role="progressbar" style={{ 'width': '60%' }}></div>
											</div>
										</td>
									</tr>

									<tr>
										<td>HD Hand Camera</td>
										<td><img src="/assets/images/products/03.png" className="product-img-2" alt="product img" /></td>
										<td>#4736890</td>
										<td><span className="badge bg-gradient-bloody text-white shadow-sm w-100">Failed</span></td>
										<td>$1400.00</td>
										<td>06 Feb 2020</td>
										<td>
											<div className="progress" style={{ 'height': '6px' }}>
												<div className="progress-bar bg-gradient-bloody" role="progressbar" style={{ 'width': '70%' }}></div>
											</div>
										</td>
									</tr>

									<tr>
										<td>Clasic Shoes</td>
										<td><img src="/assets/images/products/04.png" className="product-img-2" alt="product img" /></td>
										<td>#8543765</td>
										<td><span className="badge bg-gradient-quepal text-white shadow-sm w-100">Paid</span></td>
										<td>$1200.00</td>
										<td>14 Feb 2020</td>
										<td>
											<div className="progress" style={{ 'height': '6px' }}>
												<div className="progress-bar bg-gradient-quepal" role="progressbar" style={{ 'width': '100%' }}></div>
											</div>
										</td>
									</tr>
									<tr>
										<td>Sitting Chair</td>
										<td><img src="/assets/images/products/06.png" className="product-img-2" alt="product img" /></td>
										<td>#9629240</td>
										<td><span className="badge bg-gradient-blooker text-white shadow-sm w-100">Pending</span></td>
										<td>$1500.00</td>
										<td>18 Feb 2020</td>
										<td>
											<div className="progress" style={{ 'height': '6px' }}>
												<div className="progress-bar bg-gradient-blooker" role="progressbar" style={{ 'width': '60%' }}></div>
											</div>
										</td>
									</tr>
									<tr>
										<td>Hand Watch</td>
										<td><img src="/assets/images/products/05.png" className="product-img-2" alt="product img" /></td>
										<td>#8506790</td>
										<td><span className="badge bg-gradient-bloody text-white shadow-sm w-100">Failed</span></td>
										<td>$1800.00</td>
										<td>21 Feb 2020</td>
										<td>
											<div className="progress" style={{ 'height': '6px' }}>
												<div className="progress-bar bg-gradient-bloody" role="progressbar" style={{'width': '40%'}}></div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
};
