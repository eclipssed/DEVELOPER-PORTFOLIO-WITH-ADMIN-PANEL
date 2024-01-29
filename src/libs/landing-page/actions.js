"use server";

import { Resend } from "resend";
import Visits from "@/models/visits.model";
import ViewersDetails from "@/models/viewersDetails.model";
import CountryVisits from "@/models/countryVisits.model";

const generateDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const generateTimestamp = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function sendEmail(formData) {
  const { email, subject, message } = formData;
  // console.log(email, subject, message);
  try {
    const response = await resend.emails.send({
      from: fromEmail,
      to: ["furqanmirzaig@gmail.com"],
      subject: subject,
      react: (
        <>
          <p>Sender: {email}</p>
          <h2 className="text-xl font-bold">{subject}</h2>
          <p>{message}</p>
        </>
      ),
    });
    return true;
  } catch (err) {
    console.log("Error happened while sending email: ", err);
    throw err;
  }
}

export async function generateVisits() {
  try {
    const res = await fetch(
      "http://ip-api.com/json/?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query"
    );
    const data = await res.json();
    // console.log(data);
    // LOGIC FOR WEBSITE VISITS
    const websiteVisitsId = "65b48fde7cf5138870dfb79f";
    const websiteVisits = await Visits.findById({ _id: websiteVisitsId });
    // console.log(websiteVisits);
    if (websiteVisits) {
      const VisitsDate = generateDate();

      if (
        websiteVisits.date === VisitsDate &&
        websiteVisits.ip === data.query
      ) {
        return;
      } else {
        const websiteVisitsObject = {
          total: websiteVisits.total + 1,
          mobile: data.mobile ? websiteVisits.mobile + 1 : websiteVisits.mobile,
          desktop: data.mobile
            ? websiteVisits.desktop
            : websiteVisits.desktop + 1,
          date: VisitsDate,
          ip: data.query,
        };
        await Visits.findByIdAndUpdate(
          { _id: websiteVisits.id },
          websiteVisitsObject
        );
      }
    } else {
      const websiteVisitsObject = {
        total: 1,
        mobile: data.mobile ? 1 : 0,
        desktop: data.mobile ? 0 : 1,
        date: generateDate(),
        ip: data.query,
      };
      await Visits.create(websiteVisitsObject);
    }
  } catch (error) {
    console.log("An error occured while generating Visits: ", error);
    throw error;
  }
}

export async function generateCountryVisits() {
  try {
    const res = await fetch(
      "http://ip-api.com/json/?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query"
    );
    const data = await res.json();
    // console.log(data);

    // LOGIC FOR WEBSITE COUNTRYVISITS
    const websiteCountryVisits = await CountryVisits.find();
    if (websiteCountryVisits.length > 0) {
      const countryIsAvailable = websiteCountryVisits.find(
        (country) => country.country === data.country
      );
      if (countryIsAvailable) {
        const countryVisitsDate = generateDate();
        if (
          countryIsAvailable.ip === data.query &&
          countryIsAvailable.date === countryVisitsDate
        ) {
          return;
        } else {
          const websiteCountryVisitsObject = {
            ip: data.query,
            date: generateDate(),
            country: data.countryCode,
            count: countryIsAvailable.count + 1,
          };
          await CountryVisits.findByIdAndUpdate(
            { _id: countryIsAvailable.id },
            websiteCountryVisitsObject
          );
        }
      }
    } else {
      const websiteCountryVisitsObject = {
        ip: data.query,
        date: generateDate(),
        country: data.countryCode,
        count: 1,
      };
      // console.log(websiteCountryVisitsObject);
      await CountryVisits.create(websiteCountryVisitsObject);
    }
  } catch (error) {
    console.log("An error occured while generating CountryVisits: ", error);
    throw error;
  }
}

export async function generateViewersDetails() {
  try {
    const res = await fetch(
      "http://ip-api.com/json/?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query"
    );
    const data = await res.json();

    // LOGIC FOR WEBSITE VIEWERSDETAILS
    const websiteViewersDetails = await ViewersDetails.find();
    if (websiteViewersDetails.length > 0) {
      const viewerIpIsAvailable = websiteViewersDetails.find(
        (viewer) => viewer.ip === data.query
      );
      if (viewerIpIsAvailable) {
        const viewerDetailDate = generateDate();
        if (
          viewerIpIsAvailable.ip === data.query &&
          viewerIpIsAvailable.date === viewerDetailDate
        ) {
          return;
        } else {
          const websiteViewersDetailsObject = {
            ip: data.query,
            date: generateDate(),
            country: data.country,
            city: data.city,
            viewedAt: generateTimestamp(),
            mobileUser: data.mobile,
            currency: data.currency,
          };
          await ViewersDetails.create(websiteViewersDetailsObject);
        }
      }
    } else {
      const websiteViewersDetailsObject = {
        ip: data.query,
        date: generateDate(),
        country: data.country,
        city: data.city,
        viewedAt: generateTimestamp(),
        mobileUser: data.mobile,
        currency: data.currency,
      };
      await ViewersDetails.create(websiteViewersDetailsObject);
    }
  } catch (error) {
    console.log("An error occured while generating vieweres details: ", error);
    throw error;
  }
}
