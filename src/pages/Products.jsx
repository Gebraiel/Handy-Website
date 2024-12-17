import React from 'react'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import ProductCategories from '../ui/ProductCategories'

export default function Products() {
  return (
    <Section>
        <SectionTitle style="leading-tight">
          <h1 className="text-secondary ">Handy Products</h1>
          <h1 className="text-primary">Clean, fresh, and on-the-go Quality That Speaks for Itself</h1>
        </SectionTitle>
        <ProductCategories />
    </Section>
  )
}
