import { useEffect, useState } from "react";

import utils from "../../../utils";
import { usePage } from "../../../hooks";
import { API_RESULT_CODES, PAGES } from "../../../types";
import { useAppContext } from "../../../store";
import { dashboardApi } from "../api";

const useDashboardPage = () => {
  const {
    state: { pageState },
    dispatch,
  } = useAppContext();
  const [data, setData] = useState({});
  const [illocutionaryChart, setIllocutionaryChart] = useState({});
  const [locutionaryChart, setLocutionaryChart] = useState({});
  const [searleChart, setSearleChart] = useState({});
  const [expressionChart, setExpressionChart] = useState({});
  const [sentimentChart, setSentimentChart] = useState({});
  const [distributionChart, setDistributionChart] = useState({});
  const { dashboardPage: strings } = utils.getLSLocale();

  usePage(PAGES.Dashboard);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async (formData) => {
    const response = await utils.postWithLoading(
      dispatch,
      dashboardApi.fetchInfo()
    );

    if (response.result === API_RESULT_CODES.OK) {
      const illocutionaryLabels = response.resultData?.illocutionaries
        ?.filter((item) => item.count > 0)
        ?.map((item) => item.tag);
      const illocutionarySeries = response.resultData?.illocutionaries
        ?.filter((item) => item.count > 0)
        ?.map((item) => item.count);
      const locutionaryLabels = response.resultData?.locutionaries
        ?.filter((item) => item.count > 0)
        ?.map((item) => item.tag);
      const locutionarySeries = response.resultData?.locutionaries
        ?.filter((item) => item.count > 0)
        ?.map((item) => item.count);
      const searleLabels = response.resultData?.searles
        ?.filter((item) => item.count > 0)
        ?.map((item) => item.tag);
      const searleSeries = response.resultData?.searles
        ?.filter((item) => item.count > 0)
        ?.map((item) => item.count);
      const expressionLabels = response.resultData?.expressions
        ?.filter((item) => item.count > 0)
        ?.map((item) => item.tag);
      const expressionSeries = response.resultData?.expressions
        ?.filter((item) => item.count > 0)
        ?.map((item) => item.count);
      const sentimentLabels = response.resultData?.sentiments
        ?.filter((item) => item.count > 0)
        ?.map((item) => item.tag);
      const sentimentSeries = response.resultData?.sentiments
        ?.filter((item) => item.count > 0)
        ?.map((item) => item.count);
      const distributionLabels = response.resultData?.distributions
        ?.filter((item) => item.count > 0)
        ?.map((item) => item.tag);
      const distributionSeries = response.resultData?.distributions
        ?.filter((item) => item.count > 0)
        ?.map((item) => item.count);

      setIllocutionaryChart({
        series: illocutionarySeries,
        options: {
          chart: {
            width: 380,
            type: "pie",
          },
          labels: illocutionaryLabels,
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      });
      setLocutionaryChart({
        series: locutionarySeries,
        options: {
          chart: {
            width: 380,
            type: "pie",
          },
          labels: locutionaryLabels,
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      });
      setSearleChart({
        series: searleSeries,
        options: {
          chart: {
            width: 380,
            type: "pie",
          },
          labels: searleLabels,
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      });
      setExpressionChart({
        series: expressionSeries,
        options: {
          chart: {
            width: 380,
            type: "pie",
          },
          labels: expressionLabels,
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      });
      setSentimentChart({
        series: [{ data: sentimentSeries }],
        options: {
          chart: {
            width: 380,
            type: "bar",
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              borderRadiusApplication: "end",
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: sentimentLabels,
          },
        },
      });
      setDistributionChart({
        series: [
          {
            name: strings.distributionChart,
            data: distributionSeries,
          },
        ],
        options: {
          annotations: {
            points: [
              {
                x: strings.distributionChart,
                seriesIndex: 0,
                label: {
                  borderColor: "#775DD0",
                  offsetY: 0,
                  style: {
                    color: "#fff",
                    background: "#775DD0",
                  },
                  text: strings.distributionChart,
                },
              },
            ],
          },
          chart: {
            height: 700,
            type: "bar",
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: "50%",
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: 0,
          },
          grid: {
            row: {
              colors: ["#fff", "#f2f2f2"],
            },
          },
          xaxis: {
            labels: {
              rotate: -45,
            },
            categories: distributionLabels,
            tickPlacement: "on",
          },
          yaxis: {
            title: {
              text: strings.distributionChart,
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "light",
              type: "horizontal",
              shadeIntensity: 0.25,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 0.85,
              opacityTo: 0.85,
              stops: [50, 0, 100],
            },
          },
        },
      });
      setData(response.resultData);
    } else {
      setData({});
      utils.showErrorResponse(dispatch, response);
    }
  };

  return {
    strings,
    pageState,
    data,
    illocutionaryChart,
    locutionaryChart,
    searleChart,
    expressionChart,
    sentimentChart,
    distributionChart,
  };
};

export default useDashboardPage;
