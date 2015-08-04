import React from 'react/addons';
import Panel from '../../src/Panel';
import PanelHeader from '../../src/PanelHeader';
import PanelTitle from '../../src/PanelTitle';
import PanelBody from '../../src/PanelBody';
import PanelGroup from '../../src/PanelGroup';

class TestingContainer extends React.Component {
    displayName = 'A container to test other components'
    render() {
        const style = {
            marginTop: 20,
            marginLeft: 20,
            padding: 15,
            width: '70%'
        };
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}

class SimplePanel extends React.Component {
    displayName = 'Simple panel'
    render() {
        return (
            <TestingContainer>
              <Panel>
                  <PanelHeader>
                      <PanelTitle>
                          The Opera
                      </PanelTitle>
                  </PanelHeader>
                  <PanelBody>
                      Elaine realizes her boyfriend is actually Crazy Joe Davola.
                  </PanelBody>
              </Panel>
            </TestingContainer>
        );
    }
}


class MultiPanel extends React.Component {
    displayName = 'Simple panel'
    render() {
        return (
            <TestingContainer>
              <Panel>
                  <PanelHeader>
                      <PanelTitle>
                          The Outing
                      </PanelTitle>
                  </PanelHeader>
                  <PanelBody>
                      <p>
                          It's Jerry's birthday soon and his friends are
                          deciding on presents for him.
                          Jerry and George, in a prank started by Elaine, are
                          mistaken as a gay
                          couple by a college newspaper reporter and are publicly outed.
                          They make matters worse in trying to fix the problem,
                          and their parents end up hearing the news too.
                      </p>
                  </PanelBody>
              </Panel>
              <Panel>
                  <PanelHeader>
                      <PanelTitle>
                          The Handicap Spot
                      </PanelTitle>
                  </PanelHeader>
                  <PanelBody>
                      <p>
                          While buying a TV engagement gift for "The Drake",
                          George parks his father Frank's car in a handicap
                          parking spot; afterwards a disabled driver is injured
                          and an angry mob destroy the car. When the wedding is
                          called off, they try to get the television back, but
                          the presents have been donated to charity. Later, Mr.
                          Costanza is arrested for George's parking
                          misdemeanor, and George becomes his butler since he
                          is unable to repay the car damages. Kramer visits and
                          falls in love with the handicapped woman, and
                          convinces George to help buy her a replacement
                          wheelchair; they get a cheap one, but the brakes are
                          defective. Finally, while impersonating charity
                          workers, George and Kramer are able to get the TV
                          back.
                      </p>
                  </PanelBody>
              </Panel>
            </TestingContainer>
        );
    }
}


class CollapsiblePanel extends React.Component {
    displayName = 'Simple panel'
    render() {
        return (
            <TestingContainer>
                <PanelGroup>
                  <Panel collapse>
                      <PanelHeader>
                          <PanelTitle>
                              The Robbery
                          </PanelTitle>
                      </PanelHeader>
                      <PanelBody>
                          <p>
                              Jerry is robbed after Kramer leaves Jerry's door
                              open, so Jerry decides to find a new apartment. As a
                              real estate broker, George finds a new apartment for
                              Jerry, but then wants it for himself. The group
                              argues about who should receive the apartment, with
                              Elaine getting either George or Jerry's apartment,
                              depending on who moves. Not wanting to hurt their
                              friendship, Jerry and George decide not to move and
                              give the apartment to someone else. After seeing how
                              much the new owners enjoy the apartment, they regret
                              their decision.
                          </p>
                      </PanelBody>
                  </Panel>
                  <Panel collapse>
                      <PanelHeader>
                          <PanelTitle>
                              The Chinese Restaurant
                          </PanelTitle>
                      </PanelHeader>
                      <PanelBody>
                          <p>
                              Jerry, George, and Elaine decide to order dinner
                              without reservations at a Chinese restaurant, but are
                              repeatedly stymied by the maître d'. After they are
                              repeatedly told that they will receive a table in "5,
                              10 minutes", Elaine mentions that she is so hungry,
                              she would eat food off of another patron's plate.
                                  Jerry wagers $50 that she would. Elaine
                              approaches the diners at a table and tells them that
                              her friends would give her $50 to eat one of their
                              egg rolls and that she is willing to give them $25 of
                              it. The people at the table do not understand her,
                              and Elaine walks away and loses the wager. Jerry,
                              having lied to his uncle that he couldn't make it to
                              dinner, sees his uncle's receptionist at the
                              restaurant. Realizing that his cover is blown, he
                              decides to have dinner with his uncle after all.
                                  George, who is unable to reach his girlfriend on
                              the pay phone, and Elaine are more than willing to
                              leave. After they do, the maitre d' calls their
                              party.
                          </p>
                      </PanelBody>
                  </Panel>
                </PanelGroup>
            </TestingContainer>
        );
    }
}

React.render(<SimplePanel/>, document.getElementById('simple-panel'));
React.render(<MultiPanel/>, document.getElementById('multi-panel'));
React.render(<CollapsiblePanel/>, document.getElementById('collapsible-panel'));

