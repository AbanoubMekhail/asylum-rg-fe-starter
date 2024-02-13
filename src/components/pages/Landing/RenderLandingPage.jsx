import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      <div className="graphs-section">
        <div className="grant-rates-by-office">
          <img
            src={GrantRatesByOfficeImg}
            alt="Search Grant Rates By Office"
            className="bar-graf"
          />
          <h2>Search Grant Rates By Office</h2>
        </div>
        <div className="grant-rates-by-nationality">
          <img
            src={GrantRatesByNationalityImg}
            alt="Search Grant Rates By Nationality"
            className="pie-chart"
          />
          <h2>Search Grant Rates By Nationality</h2>
        </div>
        <div className="grant-rates-over-time">
          <img
            src={GrantRatesOverTimeImg}
            alt="Search Grant Rates Over Time"
            className="line-graph"
          />
          <h2>Search Grant Rates Over Time</h2>
        </div>
      </div>
      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{
            backgroundColor: '#404C4A',
            color: '#FFFFFF',
            fontFamily: 'Verdana',
          }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div>
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        <div className="bottom-section">
          <h2>Systemic Disparity Insights</h2>
          <div className="paragraphs-container">
            <div>
              <h2>36%</h2>
              <p>
                By the end of the Trump adminstration, the average <br /> asylum
                office grant rate had fallen 36 percent from an <br /> average
                44 percent in fiscal year 2016 to 28 percent <br /> in fiscal
                year 2020.
              </p>
            </div>
            <div>
              <h2>5%</h2>
              <p>
                The New York asylum office grant rate dropped to 5 <br />{' '}
                percent in fiscal year 2020.
              </p>
            </div>
            <div>
              <h2>6x Lower</h2>
              <p>
                Between fiscal year 2017 and 2020, the New York <br /> asylum
                office's average grant rate was six times lower <br /> than the
                San Francisco asylum office.
              </p>
            </div>
          </div>
          <div className="read-more-data-btn-container">
            <Button
              type="default"
              style={{
                backgroundColor: '#404C4A',
                color: '#FFFFFF',
                fontFamily: 'Verdana',
              }}
              // onClick={() => history.push('/graphs')}
            >
              Read More
            </Button>
          </div>
        </div>
        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
