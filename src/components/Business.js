import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Business = () => {
  let data = useLocation();
  const [business, setBusiness] = useState();
  useEffect(() => {
    if (data.state && data.state.business) setBusiness(data.state.business);
  }, []);
  return (
    <>
      {business && (
        <div class="grid grid-cols-2 gap-2">
          <div>
            <img src={business.image} className="h-2/3" />
          </div>
          <div>
            <p>
              <b>Business Name: </b> {business.company_name}
            </p>
            <p>
              <b>Address: </b> {business.address}
            </p>
            <p>
              <b>Website: </b> {business.website}
            </p>
            <p className="flex">
              <b className="mr-2">Hours: </b>{" "}
              <div>
                {business.hours.map((hour) => {
                  return (
                    <p>
                      {hour.day} {hour.open} {hour.close}
                    </p>
                  );
                })}
              </div>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Business;
