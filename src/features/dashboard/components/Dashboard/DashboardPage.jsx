import React from "react";
import ReactApexChart from "react-apexcharts";

import { AuthLayout } from "../../../../components";
import { useDashboardPage } from "../../hooks";

const DashboardPage = () => {
  const service = useDashboardPage();

  return (
    <AuthLayout>
      <div className="p-3">
        <h1 className="font-bold mb-2 text-xl">{service.strings.searle}</h1>
        <div className="mt-4 mb-4">
          <h2 className="font-bold">{service.strings.searleHeader}</h2>
          <p>{service.strings.searleText} </p>
        </div>
        <div className="flex flex-row flex-wrap gap-3">
          <div className="bg-white rounded section-body p-3 flex-1">
            <div
              id="searle-chart"
              className="flex flex-col items-start justify-center"
            >
              {service.searleChart?.series && (
                <>
                  <span>{service.strings.searleChart}</span>
                  <ReactApexChart
                    options={service.searleChart.options}
                    series={service.searleChart.series}
                    type="pie"
                    width={380}
                  />
                  <p
                    className="leading-7 text-justify mt-4"
                    style={{ color: "#00e396" }}
                  >
                    {service.data?.searlesAnalysis}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <h1 className="font-bold mt-8 mb-2 text-xl">
          {service.strings.austin}
        </h1>
        <div className="mt-4 mb-4">
          <h2 className="font-bold">{service.strings.austinHeader}</h2>
          <p>{service.strings.austinText} </p>
        </div>
        <div className="bg-white rounded section-body p-3 ">
          <div className=" flex flex-row flex-wrap gap-2">
            <div
              id="illocutionary-chart"
              className="flex flex-col items-start justify-center flex-1"
            >
              {service.illocutionaryChart?.series && (
                <>
                  <h2 className="font-bold mb-2">
                    {service.strings.illocutionaryHeader}
                  </h2>
                  <span>{service.strings.illocutionary}</span>
                  <ReactApexChart
                    options={service.illocutionaryChart.options}
                    series={service.illocutionaryChart.series}
                    type="pie"
                    width={380}
                  />
                  <div className="mt-8">
                    <h2 className="font-bold">
                      {service.strings.illocutionaryText1}
                    </h2>
                    <p>{service.strings.illocutionaryText2} </p>
                  </div>
                </>
              )}
            </div>
            <div
              id="locutionary-chart"
              className="flex flex-col items-start justify-center flex-1"
            >
              {service.locutionaryChart?.series && (
                <>
                  <h2 className="font-bold mb-2">
                    {service.strings.locutionaryHeader}
                  </h2>
                  <span>{service.strings.locutionary}</span>
                  <ReactApexChart
                    options={service.locutionaryChart.options}
                    series={service.locutionaryChart.series}
                    type="pie"
                    width={380}
                  />
                  <div className="mt-8">
                    <h2 className="font-bold">
                      {service.strings.locutionaryText1}
                    </h2>
                    <p>{service.strings.locutionaryText2} </p>
                  </div>
                </>
              )}
            </div>
          </div>
          <p
            className="leading-7 text-justify mt-4"
            style={{ color: "#00e396" }}
          >
            {service.data?.austinAnalysis}
          </p>
        </div>
        <h1 className="font-bold mt-8 mb-2 text-xl">
          {service.strings.distribution}
        </h1>
        <div className="flex flex-row flex-wrap gap-3">
          <div className="bg-white rounded section-body p-3 flex-1">
            <div
              id="distribution-chart"
              className="flex flex-col items-start justify-center"
            >
              {service.distributionChart?.series && (
                <>
                  <span>{service.strings.distributionChart}</span>
                  <ReactApexChart
                    options={service.distributionChart.options}
                    series={service.distributionChart.series}
                    type="bar"
                    height={700}
                    width={700}
                  />
                  <p
                    className="leading-7 text-justify mt-4"
                    style={{ color: "#00e396" }}
                  >
                    {service.data?.distributionAnalysis}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <h1 className="font-bold mt-8 mb-2 text-xl">
          {service.strings.expression}
        </h1>
        <div className="mt-4 mb-4">
          <h2 className="font-bold">{service.strings.expressionHeader}</h2>
          <p>{service.strings.expressionText} </p>
        </div>
        <div className="flex flex-row flex-wrap gap-3">
          <div className="bg-white rounded section-body p-3 flex-1">
            <div
              id="searle-chart"
              className="flex flex-col items-start justify-center"
            >
              {service.expressionChart?.series && (
                <>
                  <span>{service.strings.expression}</span>
                  <ReactApexChart
                    options={service.expressionChart.options}
                    series={service.expressionChart.series}
                    type="pie"
                    width={380}
                  />
                  <p
                    className="leading-7 text-justify mt-4"
                    style={{ color: "#00e396" }}
                  >
                    {service.data?.expressionAnalysis}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <h1 className="font-bold mt-8 mb-2 text-xl">
          {service.strings.sentiment}
        </h1>
        <div className="mt-4 mb-4">
          <h2 className="font-bold">{service.strings.sentimentHeader}</h2>
          <p>{service.strings.sentimentText} </p>
        </div>
        <div className="flex flex-row flex-wrap gap-3">
          <div className="bg-white rounded section-body p-3 flex-1">
            <div
              id="searle-chart"
              className="flex flex-col items-start justify-center"
            >
              {service.sentimentChart?.series && (
                <>
                  <span>{service.strings.sentiment}</span>
                  <ReactApexChart
                    options={service.sentimentChart.options}
                    series={service.sentimentChart.series}
                    type="bar"
                    width={380}
                  />
                  <p
                    className="leading-7 text-justify mt-4"
                    style={{ color: "#00e396" }}
                  >
                    {service.data?.sentimentAnalysis}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default DashboardPage;
