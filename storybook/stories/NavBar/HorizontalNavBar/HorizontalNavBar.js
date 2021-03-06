// Copyright (C) 2017-2020 Smart code 203358507

const React = require('react');
const { storiesOf } = require('@storybook/react');
const HorizontalNavBar = require('stremio/common/HorizontalNavBar');

storiesOf('NavBar', module).add('HorizontalNavBar', () => (
    <HorizontalNavBar
        backButton={false}
        searchBar={true}
        addonsButton={true}
        fullscreenButton={true}
        notificationsMenu={true}
        navMenu={false}
    />
));
