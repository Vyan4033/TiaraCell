export default function pemesanan(){
    return(
        <div>
            <div className="text-center">
                <h4>PEMESANAN</h4>
                <div className="col-md-7 col-lg-8 mb-3 container">
            <form className="needs-validation" novalidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label for="firstName" className="form-label">Nama Depan</label>
                  <input type="text" className="form-control" id="firstName" placeholder="First Name"  required></input>
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <label for="lastName" className="form-label">Nama Belakang</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Last Name" required></input>
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-12">
                  <label for="username" className="form-label">Username</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" id="username" placeholder="Username" required></input>
                  <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com"></input>
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="col-12">
                  <label for="address" className="form-label">Alamat</label>
                  <input type="text" className="form-control" id="address" placeholder="Alamat" required></input>
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="col-md-5">
                  <label for="country" className="form-label">Negara</label>
                  <select className="form-select" id="country" required>
                    <option value="">Pilihan...</option>
                    <option>Indonesia</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4">
                  <label for="state" className="form-label">Kabupaten</label>
                  <select className="form-select" id="state" required>
                    <option value="">Pilihan...</option>
                    <option>Kab. Banyuwangi</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
              <hr className="my-4"></hr>
              <h4 className="mb-3">Pembayaran</h4>
              <div className="my-3">
                <div className="form-check">
                  <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required></input>
                  <label className="form-check-label" for="credit">Kartu Kredit</label>
                </div>
                <div className="form-check">
                  <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required></input>
                  <label className="form-check-label" for="debit">Kartu Debit</label>
                </div>
                <div className="form-check">
                  <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required></input>
                  <label className="form-check-label" for="paypal">Gopay</label>
                </div>
              </div>
              <div className="row gy-3">
                <div className="col-md-6">
                  <label for="cc-name" className="form-label">Nama Kartu ATM</label>
                  <input type="text" className="form-control" id="cc-name" placeholder="Masukkan Nama Kartu Kredit Anda" required></input>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6">
                  <label for="cc-number" className="form-label">Nomor Kartu Kredit</label>
                  <input type="text" className="form-control" id="cc-number" placeholder="Masukkan Nomor Kartu Kredit Anda" required></input>
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
                </div>
              <hr className="my-4"></hr>
              <button className="w-100 btn btn-primary btn-lg" type="submit">Lanjutkan Pembayaran</button>
            </form>
            </div>
        </div>
        </div>
    )
}
