import React from 'react'
import Banner from '../ui/Banner'
import SectionTitle from '../ui/SectionTitle'
import Section from '../ui/Section'
import Paragraph from '../ui/Paragraph'
import { useNavigation } from "react-router-dom"
import Loader from '../ui/Loader'

export default function CustomerSupport() {
      console.log("Customer Support");

      const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
         <Banner image={'/Customer-Support/banner.webp'} />

        <Section>
                <SectionTitle>
                Your Needs, Our Priority
                </SectionTitle>
                <ol className='space-y-3'>
                    <li className='space-y-2'>
                        <b className='text-lg'>1. Product Information & Guidance</b>
                        <Paragraph size="md" className='text-justify'>
                            <ul className='list-disc pl-10'>
                                <li>
                                    Get clear, detailed insights about our products, including ingredients, safe usage, and helpful tips.
                                </li>
                                <li>
                                    Explore educational resources like demos, tutorials, and FAQs designed to make your experience seamless.
                                </li>
                            </ul>
                        </Paragraph>
                    </li>
                    <li className='space-y-2'>
                        <b className='text-lg'>2. Quick & Easy Complaint Resolution</b>
                        <Paragraph size="md" className='text-justify'>
                            <ul className='list-disc pl-10'>
                                <li>
                                Hassle-free processes to address concerns swiftly.
                                </li>
                                <li>
                                Solutions that work for you: replacements, refunds, or personalized support.

                                </li>
                                <li>
                                Your feedback drives our improvements—always!

                                </li>
                            </ul>
                        </Paragraph>
                    </li>
                    <li className='space-y-2'>
                        <b className='text-lg'>3. Stay Connected on Social Media:
                        </b>
                        <Paragraph size="md" className='text-justify'>
                            <ul className='list-disc pl-10'>
                                <li>
                                Engage with us directly through our social platforms.
                                </li>
                                <li>
                                Prompt responses to inquiries, thoughtful interactions, and updates on promotions and success stories.

                                </li>

                            </ul>
                        </Paragraph>
                    </li>
                    <li className='space-y-2'>
                        <b className='text-lg'>4. Exclusive Customer Rewards:
                        </b>
                        <Paragraph size="md" className='text-justify'>
                            <ul className='list-disc pl-10'>
                                <li>
                                Enjoy loyalty perks—special discounts, personalized offers, and free samples just for you.

                                </li>
                                <li>
                                Because our relationship with you matters most!
                                </li>

                            </ul>
                        </Paragraph>
                    </li>
                </ol>
        </Section>
    </>
  )
}
