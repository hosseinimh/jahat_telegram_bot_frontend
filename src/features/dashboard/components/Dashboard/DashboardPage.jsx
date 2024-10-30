import React from "react";
import ReactApexChart from "react-apexcharts";

import { AuthLayout, TextLoading } from "../../../../components";
import { useDashboardPage } from "../../hooks";
import utils from "../../../../utils";

const DashboardPage = () => {
  const service = useDashboardPage();

  return (
    <AuthLayout>
      <div className="p-3">
        <h1 className="font-bold mb-2 text-xl">{service.strings.searle}</h1>
        <div className="bg-white rounded section-body p-3 flex-1">
          <div className="mb-4">
            <h2 className="font-bold">{service.strings.searleHeader}</h2>
            <p className="text-justify leading-8">
              {service.strings.searleText}
            </p>
          </div>
          {service.searleChart?.series && (
            <div className="overflow-x-auto">
              <ReactApexChart
                options={service.searleChart.options}
                series={service.searleChart.series}
                type="pie"
                width={380}
              />
            </div>
          )}
          {service.data?.report?.searle && (
            <p
              className="leading-8 text-justify mt-4"
              style={{ color: "#10b981" }}
            >
              {utils.localeDigits(service.data?.report?.searle)}
            </p>
          )}
          {!service.data?.report?.searle && <TextLoading className="mt-4" />}
        </div>
        <h1 className="font-bold mt-8 mb-2 text-xl">
          {service.strings.austin}
        </h1>
        <div className="bg-white rounded section-body p-3 ">
          <div className="mb-4">
            <h2 className="font-bold">{service.strings.austinHeader}</h2>
            <p className="text-justify leading-8">
              {service.strings.austinText}
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-2">
            {service.illocutionaryChart?.series && (
              <div className="flex-1">
                <h2 className="font-bold mb-2">
                  {service.strings.illocutionaryHeader}
                </h2>
                <span>{service.strings.illocutionary}</span>
                <div className="overflow-x-auto">
                  <ReactApexChart
                    options={service.illocutionaryChart.options}
                    series={service.illocutionaryChart.series}
                    type="pie"
                    width={380}
                  />
                </div>
                <div className="mt-8">
                  <h2 className="font-bold">
                    {service.strings.illocutionaryText1}
                  </h2>
                  <p className="text-justify leading-8">
                    {service.strings.illocutionaryText2}
                  </p>
                </div>
              </div>
            )}
            {service.locutionaryChart?.series && (
              <div className="flex-1">
                <h2 className="font-bold mb-2">
                  {service.strings.locutionaryHeader}
                </h2>
                <span>{service.strings.locutionary}</span>
                <div className="overflow-x-auto">
                  <ReactApexChart
                    options={service.locutionaryChart.options}
                    series={service.locutionaryChart.series}
                    type="pie"
                    width={380}
                  />
                </div>
                <div className="mt-8">
                  <h2 className="font-bold">
                    {service.strings.locutionaryText1}
                  </h2>
                  <p className="text-justify leading-8">
                    {service.strings.locutionaryText2}
                  </p>
                </div>
              </div>
            )}
          </div>
          {service.data?.report?.austin && (
            <p
              className="leading-8 text-justify mt-4"
              style={{ color: "#10b981" }}
            >
              {utils.localeDigits(service.data?.report?.austin)}
            </p>
          )}
          {!service.data?.report?.austin && <TextLoading className="mt-4" />}
        </div>
        <h1 className="font-bold mt-8 mb-2 text-xl">
          {service.strings.distribution}
        </h1>
        <div className="bg-white rounded section-body p-3 flex-1">
          <p className="mb-4">{service.strings.distributionChart}</p>
          {service.distributionChart?.series && (
            <div className="overflow-x-auto">
              <ReactApexChart
                options={service.distributionChart.options}
                series={service.distributionChart.series}
                type="bar"
                height={700}
                width={700}
              />
            </div>
          )}
          {service.data?.report?.distribution && (
            <p
              className="leading-8 text-justify mt-4"
              style={{ color: "#10b981" }}
            >
              {utils.localeDigits(service.data?.report?.distribution)}
            </p>
          )}
          {!service.data?.report?.distribution && (
            <TextLoading className="mt-4" />
          )}
        </div>
        <h1 className="font-bold mt-8 mb-2 text-xl">
          {service.strings.expression}
        </h1>
        <div className="bg-white rounded section-body p-3 flex-1">
          <div className="mb-4">
            <h2 className="font-bold">{service.strings.expressionHeader}</h2>
            <p className="text-justify leading-8">
              {service.strings.expressionText}
            </p>
          </div>
          <div
            id="searle-chart"
            className="flex flex-col items-start justify-center"
          >
            <p className="mb-4">{service.strings.expression}</p>
            {service.expressionChart?.series && (
              <div className="overflow-x-auto">
                <ReactApexChart
                  options={service.expressionChart.options}
                  series={service.expressionChart.series}
                  type="pie"
                  width={380}
                />
              </div>
            )}
            {service.data?.report?.expression && (
              <p
                className="leading-8 text-justify mt-4"
                style={{ color: "#10b981" }}
              >
                {utils.localeDigits(service.data?.report?.expression)}
              </p>
            )}
            {!service.data?.report?.expression && (
              <TextLoading className="mt-4" />
            )}
          </div>
        </div>
        <h1 className="font-bold mt-8 mb-2 text-xl">
          {service.strings.sentiment}
        </h1>
        <div className="bg-white rounded section-body p-3 flex-1">
          <div className="mb-4">
            <h2 className="font-bold">{service.strings.sentimentHeader}</h2>
            <p className="text-justify leading-8">
              {service.strings.sentimentText}
            </p>
          </div>

          <p className="mb-4">{service.strings.sentiment}</p>
          {service.sentimentChart?.series && (
            <div className="overflow-x-auto">
              <ReactApexChart
                options={service.sentimentChart.options}
                series={service.sentimentChart.series}
                type="bar"
                width={380}
              />
            </div>
          )}
          {service.data?.report?.sentiment && (
            <p
              className="leading-8 text-justify mt-4"
              style={{ color: "#10b981" }}
            >
              {utils.localeDigits(service.data?.report?.sentiment)}
            </p>
          )}
          {!service.data?.report?.sentiment && <TextLoading className="mt-4" />}
        </div>
      </div>
    </AuthLayout>
  );
};

export default DashboardPage;
