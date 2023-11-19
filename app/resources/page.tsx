"use client";

export default function ResourcePage() {
  return (
    <div className="card w-[90%] bg-white shadow-xl ml-[5%] ">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Resources</h2>
        <div className="flex">
          <div className="text-center items-center w-full h-full">
            <p className="font-sans: inter">
              <p style={{ color: "red" }}>
                <p className="text-xl">
                  <p>
                    Emergency: Police, Fire, Medical - Dial{" "}
                    <a className="underline" href="tel:911">
                      9-1-1
                    </a>
                  </p>
                </p>

                <p>
                  If using a cell phone in an emergency, dial{" "}
                  <a className="underline" href="tel:9098693070">
                    (909) 869-3070
                  </a>
                </p>
              </p>

              <p>
                Main Office Number:{" "}
                <a className="underline" href="tel:9098693061">
                  (909) 869-3061
                </a>
              </p>
              <p>
                Non-Emergency After Hours:{" "}
                <a className="underline" href="tel:9098693070">
                  (909) 869-3070
                </a>
              </p>
              <p>
                Anonymous Crime Tips:{" "}
                <a className="underline" href="tel:9098693399">
                  (909) 869-3399
                </a>
              </p>
              <p>
                Email:{" "}
                <a className="underline" href="mailto:<police@cpp.edu>">
                  police@cpp.edu
                </a>
              </p>
              <p>Location/Mailing Address:</p>
              <p>
                Cal Poly Pomona - University Police Department 3801 W. Temple
                Ave Bldg. 109 Pomona, CA 91768
              </p>
              <p>
                Campus Map:{" "}
                <a className="underline" href="https://www.cpp.edu/maps/">
                  {" "}
                  https://www.cpp.edu/maps/{" "}
                </a>
              </p>
              <a href="/">Back</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
