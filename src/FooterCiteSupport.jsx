import React from 'react';

export default class FooterCiteSupport extends React.Component {
    displayName = 'Footer component to display dicty sponsors and citation'

    render() {
        const cite = [
            {href: 'http://www.ncbi.nlm.nih.gov/pubmed/23172289', name: 'dictyBase'},
            {href: 'http://www.ncbi.nlm.nih.gov/pubmed/23494302', name: 'Stock Center'}
        ];

        const support = [
            {href: 'http://www.nih.gov/', name: 'NIH'},
            {href: 'http://gmod.org/wiki/Main_Page', name: 'GMOD'},
            {href: 'http://geneontology.org/', name: 'Gene Ontology'}
        ];

        return (
            <div className="col-sm-2 col-xs-12">
                <div className="footMenuSupport">Please CITE:</div>
                {
                    cite.map(site => {
                        return (
                            <div className="footLinks"><a href={site.href}>{site.name}</a></div>
                        );
                    })
                }
                <div className="footMenuSupport">Supported by</div>
                {
                    support.map(site => {
                        return (
                            <div className="footLinks"><a href={site.href}>{site.name}</a></div>
                        );
                    })
                }
            </div>
        );
    }
}
