import React, { Component } from 'react';
import Codepen from 'react-codepen-embed';
import './Projects.scss';
import Btn from '../Shared/Components/Btn';

export default class Projects extends Component {
    componentDidMount() {}
    render() {
        return (
            <div className="projects">
                <div className="projects-content">
                    <div className="projects-title no-flow">Projects</div>
                    <div className="projects-codepen-box box codepen-a">
                        <Codepen hash="PxqYYQ" user="nathanlschneider" />
                    </div>
                    <div className="projects-codepen-box box codepen-b">
                        <Codepen hash="zMpNOe" user="nathanlschneider" />
                    </div>
                    <div className="projects-codepen-box box codepen-c">
                        <Codepen hash="YJmmpr" user="nathanlschneider" />
                    </div>
                    <div className="projects-codepen-box box codepen-d">
                        <Codepen hash="YOpwed" user="nathanlschneider" />
                    </div>

                    <div className="projects-github-box box github-a">
                        <div className="github-box-image box" />
                        <Btn value="View Code" className="github-box-Btn github-btn-a" />
                        <Btn value="Demo" className="github-box-Btn github-btn-b" />
                        <div className="github-box-title no-flow">Name</div>
                        <div className="github-box-sub-title">Subtext</div>
                        <div className="github-box-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam dolorum repellendus
                            consectetur corrupti quasi nam! Veritatis dicta ut ratione facilis repudiandae voluptatum
                            non exercitationem, quaerat, maiores quo eligendi hic ad vero enim accusamus quod tempore
                            molestias sunt earum!
                        </div>
                    </div>
                    <div className="projects-github-box box github-b">
                        <div className="github-box-image box" />
                        <Btn value="View Code" className="github-box-Btn github-btn-a" />
                        <Btn value="Demo" className="github-box-Btn github-btn-b" />
                        <div className="github-box-title no-flow">Name</div>
                        <div className="github-box-sub-title">Subtext</div>
                        <div className="github-box-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam dolorum repellendus
                            consectetur corrupti quasi nam! Veritatis dicta ut ratione facilis repudiandae voluptatum
                            non exercitationem, quaerat, maiores quo eligendi hic ad vero enim accusamus quod tempore
                            molestias sunt earum!
                        </div>
                    </div>
                    <div className="projects-github-box box github-c">
                        <div className="github-box-image box" />
                        <Btn value="View Code" className="github-box-Btn github-btn-a" />
                        <Btn value="Demo" className="github-box-Btn github-btn-b" />
                        <div className="github-box-title no-flow">Name</div>
                        <div className="github-box-sub-title">Subtext</div>
                        <div className="github-box-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam dolorum repellendus
                            consectetur corrupti quasi nam! Veritatis dicta ut ratione facilis repudiandae voluptatum
                            non exercitationem, quaerat, maiores quo eligendi hic ad vero enim accusamus quod tempore
                            molestias sunt earum!
                        </div>
                    </div>
                    <div className="projects-github-box box github-d">
                        <div className="github-box-image box" />
                        <Btn value="View Code" className="github-box-Btn github-btn-a" />
                        <Btn value="Demo" className="github-box-Btn github-btn-b" />
                        <div className="github-box-title no-flow">Name</div>
                        <div className="github-box-sub-title">Subtext</div>
                        <div className="github-box-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam dolorum repellendus
                            consectetur corrupti quasi nam! Veritatis dicta ut ratione facilis repudiandae voluptatum
                            non exercitationem, quaerat, maiores quo eligendi hic ad vero enim accusamus quod tempore
                            molestias sunt earum!
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
