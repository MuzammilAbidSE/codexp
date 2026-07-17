"use client";

import type { ServiceDetailData } from "@/lib/servicesData";

export default function ServiceDetail({
  id,
  data,
}: {
  id: string;
  data: ServiceDetailData;
}) {
  return (
    <div id={id} className="page service-detail">
      <div className="service-hero">
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
      </div>
      <div className="service-content">
        <p>{data.intro}</p>
        {data.featureLists.map((list) => (
          <div className="feature-list" key={list.title}>
            <h3>{list.title}</h3>
            <ul>
              {list.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
