import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Weather from "../assets/weather.svg";
import co2 from "../assets/co2.svg";
import { API } from "aws-amplify";
import { useState, useEffect } from "react";
import drop from "../assets/drop.svg";
import ec from "../assets/ec.svg";
import sun from "../assets/sun.svg";
import temperature from "../assets/temperature.svg";
import ph from "../assets/ph.svg";

const Content = () => {
  const [event, setEvent] = useState({});
  useEffect(() => {
    const fetchpost = async () => {
      const res = await API.get("sgapi", "/sensor/");
      setEvent(res);
      console.log(res);
    };
    fetchpost();
  }, []);
  useEffect(() => {}, []);

  return (
    <div className="pl-10  pr-10">
      <div className="line1 flex-row flex rounded-md bg-lime-400">
        <div className="one">
        <div class="stats rounded align-bottom bg-lime-400 ">
            <div class="stat">
              <div class="stat-value text-white ">{event.pintensity}</div>
              <div class="stat-title font-medium">Precipitate intensity</div>
            </div>
          </div>

          <div class="stats rounded align-bottom bg-lime-400">
            <div class="stat">
              <div class="stat-value text-white">{event.pprobability}</div>
              <div class="stat-title font-medium">Precipitate probability</div>
            </div>
          </div>

          <div class="stats rounded align-bottom bg-lime-400">
            <div class="stat">
              <div class="stat-value text-white">{event.pressure}</div>
              <div class="stat-title font-medium">Pressure</div>
            </div>
          </div>

        </div>
        <div className="two">
        <div class="stats rounded align-bottom bg-lime-400">
          <div class="stat">
            <div class="stat-value text-white">{event.wspeed}</div>
            <div class="stat-title font-medium">Wind speed</div>
          </div>
        </div>

        <div class="stats rounded align-bottom bg-lime-400">
          <div class="stat">
            <div class="stat-value text-white">{event.wdirection}</div>
            <div class="stat-title font-medium">Wind Direction</div>
          </div>
        </div>

        <div class="stats rounded-md align-bottom bg-lime-400">
          <div class="stat">
            <div class="stat-figure text-secondary">
              <div class="avatar online">
                <div class="w-16 rounded-full">
                  <img src={Weather} alt="" />
                </div>
              </div>
            </div>
            <div class="stat-value text-white">{event.wtemp}</div>
            <div class="stat-title font-medium">Windy</div>
          </div>
        </div>
        </div>
      </div>

      <div className=" justify-center justify-items-center">
        <div class="stats stats-vertical lg:stats-horizontal  ">
          
        </div>
      </div>

      <div className="content flex flex-col lg:flex-row justify-evenly flex pt-5">
        <div className="left">
          <div className="text-4xl font-semibold underline underline-offset-2 text-green-600">Sensor</div>

          <div className="info flex">
            <div className="leftcol flex flex-col pt-3">
              <div class="stats rounded">
                <div class="stat">
                  <img className="w-8" src={co2} alt="" />
                  <div class="stat-value">{event.co2aero}</div>
                  <div class="stat-title">Co2 aeration</div>
                </div>
              </div>

              <div class="stats rounded">
                <div class="stat">
                  <img className="w-8" src={sun} alt="" />
                  <div class="stat-value">{event.light}</div>
                  <div class="stat-title">Light</div>
                </div>
              </div>

              <div class="stats rounded">
                <div class="stat">
                  <img className="w-8" src={ph} alt="" />
                  <div class="stat-value">{event.ph}</div>
                  <div class="stat-title">pH</div>
                </div>
              </div>
            </div>

            <div className="rightcol flex flex-col pt-3 pl-20">
              <div class="stats rounded">
                <div class="stat">
                  <img className="w-8" src={ec} alt="" />
                  <div class="stat-value">{event.ec}</div>
                  <div class="stat-title">EC</div>
                </div>
              </div>

              <div class="stats rounded">
                <div class="stat">
                  <img className="w-8" src={drop} alt="" />
                  <div class="stat-value">{event.sm}</div>
                  <div class="stat-title">Soil Moisture</div>
                </div>
              </div>

              <div class="stats rounded">
                <div class="stat">
                  <img className="w-8" src={temperature} alt="" />
                  <div class="stat-value">{event.st}</div>
                  <div class="stat-title">Soil Tempreture</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="right pt-12 rounded-sm">
          <iframe
            className="rounded-xl"
            width="520"
            height="386"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=386&amp;hl=en&amp;q=pimplegaon%20pune+(pimpalgaon)&amp;t=k&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>{" "}
          <a href="https://add-map.com/"></a>{" "}
          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=0be1ddff42e0997de165b8ff4033d38efb3890f2"
          ></script>
        </div>
      </div>
    </div>
  );
};

export default Content;
