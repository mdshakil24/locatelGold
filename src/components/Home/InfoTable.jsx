import React from "react";

export default function InfoTable() {
  return (
    <section className="info--table">
      <div className="container mx-auto">
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Plan</th>
              <th>Precio regular</th>
              <th>Precio especial</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Trimestral</td>
              <td>$66,150 COP</td>
              <td>xxxxxx</td>
              <td>
                <div className="button">
                  <a href="#">¡Comprar membresía!</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Trimestral</td>
              <td>$66,150 COP</td>
              <td>xxxxxx</td>
              <td>
                <div className="button">
                  <a href="#">¡Comprar membresía!</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Trimestral</td>
              <td>$66,150 COP</td>
              <td>xxxxxx</td>
              <td>
                <div className="button">
                  <a href="#">¡Comprar membresía!</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
