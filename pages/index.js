import React, { Component } from 'react';
import "isomorphic-fetch";

// import { lazy, Suspense } from 'react';
// const Title = lazy(() => import('../code-splitting/Title'));

export default class Home extends Component {
    static getInitialProps = async () => {
        const response = await fetch(
            "https://api.github.com/orgs/rocketseat/repos"
        );
     
        return {
            
            repositories: await response.json() };
        };
        
        render(){
            return(
                <div>
                    {/* <Suspense fallback = {
                        <i><p className="code">Carregando o Site...Um momento!</p></i> }>
                        <Title />
                    </Suspense> */}
                    {this.props.repositories.map(repo => (
                        <h1 key={repo.id}>{repo.name}</h1>
                    ))}
                </div>
            );
        }
     
    }