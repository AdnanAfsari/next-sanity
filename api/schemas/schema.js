import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import menuItem from './menuItem'
import landingPage from './pages/lending'
import homeSection from './pages/landing/home'
import partnersWhat from './pages/landing/what'
import site from './site'
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    menuItem,
    site,
    landingPage,
    homeSection,
    partnersWhat
  ]),
})
