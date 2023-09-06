import React from 'react'
import Header from '../header'
import logoData from '@/logodata'
import CardList from '../cardList'
import Info from '../info'
import Form from '../form'
import Comment from '../comment'
import ProgressBar from '../progressBar'
import CommentQuestion from '../commentQuestion'
import TeamCard from '../teamCard'
import Link from 'next/link'
import Hotline from '../hotline'
import Footer from '../footer'

export default function HomePage() {


  return (
    <div className='max-w-screen'>
      <div className=' max-w-[1920px] mx-auto overflow-hidden z-10  relative bg-darkPurple bg-center'>
        <Header />
        <div className='w-[1121px] top-[-200px] right-[-550px]  -z-[1] absolute h-[1121px] rounded-full border-[110px] border-solid border-purple  bg-[]'>  </div>
        <div className='border-purple w-[205px] h-[205px] border-[26px] rounded-full absolute bottom-[-66px] left-[200px]'></div>
        <div className='border-purple w-[593px] h-[593px] border-[64px] -z-[1] rounded-full absolute top-[-245px] left-[-320px]'></div>
        <div className='pt-[112px] relative z-0'>
          <div className='max-w-[1140px] mx-auto pt-2'>
            <div className='flex relative   justify-between'>
              <div className='w-[443px]'>
                <h2 className='text-4xl text-white font-bold'>High quality IT-Solutions for help your problems about technology.</h2>
                <p className='text-base text-white pt-3 '>Quis eleifend quam adipiscing vitae proin sagittis nisl. Lectus vestibulum mattis.</p>
                <div className='w-[387px] mt-11 bg-white rounded-[50px] h-[53px] pl-[29px] justify-between pr-[16px]  flex items-center'>
                  <input placeholder='Enter your phone number' className='outline-none flex-1' />
                  <label className='text-base font-bold cursor-pointer'>
                    | Request Call</label>
                </div>
              </div>
              <div className='absolute left-[443px] bottom-1 pl-[30px]'>
                <img src='../icons/Arrow.png' />
              </div>
              <div className='pr-[185px] flex flex-col mt-[50px]'>
                <div className='pl-4'>
                  <span className='text-white text-base'>
                    (4,5/5) Rating Star by Clients
                  </span>
                  <div className='flex gap-[17px] items-start mt-3'>
                    <div className='flex'>
                      <img src='../icons/star.svg' />
                      <img src='../icons/star.svg' />
                      <img src='../icons/star.svg' />
                      <img src='../icons/star.svg' />
                      <img src='../icons/star-half-alt.svg' />
                    </div>
                    <button className='flex items-center '>
                      <span className='text-xs font-bold text-white'> More details</span>
                      <img src='../icons/angle-right.svg' />
                    </button>
                  </div>
                </div>
                <div className='flex items-center gap-[17px] mt-[35px] '>
                  <img src='../icons/play.svg' />
                  <p className='border-b-white cursor-pointer border-b-2 text-white text-sm '>Watch a video about our business</p>
                </div>
              </div></div>
            <div className='flex items-center mt-[150px] gap-4 text-white mb-[135px]'>
              <h4>FEATURED IN:</h4>
              <div className='flex gap-[56px]'>
                {logoData.map(logo => {
                  return <div className='flex items-center gap-1' key={logo.id}><img src={logo.img} />
                    <span className='text-xl'>{logo.title}</span></div>
                })}
              </div>
            </div>
          </div>

        </div>
        <div className='absolute -z-[1] top-[100px] w-[600px] right-[-150px] '>
          <div className='hexagon-container absolute z-10 left-[-60px] top-0'>
            <img className=' hexagon-img  ' src='image1.jpeg' />
          </div>
          <div className='hexagon-container w-[549px] h-[560px] '>
            <img className='hexagon-img' src='image.jpeg' />
          </div>
          <div className='hexagon-container w-[216px] h-[240px] absolute bottom-[-10px] left-[70px]'>
            <img className='hexagon-img ' src='image2.jpeg' />
          </div>
        </div>

      </div>
      <div className='my-[125px] max-w-[1140px] mx-auto'>
        <div className='mx-auto text-center w-1/2 mb-[41px]'>
          <h4 className='pb-[12px] text-darkPurple font-bold text-base uppercase'>Services</h4>
          <h2 className='text-black1 text-4xl font-bold  '>We provide All-in-one Solution for every IT job</h2>
        </div>
        <CardList />
        <div className='flex px-[39px] gap-[16px]  text-center my-[100px]'>
          <div className='w-[254px]'>
            <span className='number'>720</span>
            <p className='subtitle'>WORLDWIDE CUSTOMERS</p>
          </div>
          <div className='w-[254px]'>
            <span className='number'>12K</span>
            <p className='subtitle'>PROJECTS DONE</p>
          </div>
          <div className='w-[254px]'>
            <span className='number'>5.896</span>
            <p className='subtitle'>IT PRODUCTS</p>
          </div>
          <div className='w-[254px]'>
            <span className='number'>$890K</span>
            <p className='subtitle'>PROJECTS SPEND</p>
          </div>
        </div>
        <div className='flex gap-[112px] h-[417px]'>
          <div className='w-[535px]'>
            <div className='mb-12 '>
              <h4 className='text-darkPurple font-bold text-base mb-3'>WHY US</h4>
              <h3 className='text-black1 font-bold text-4xl mb-3 '>We have over 25+ years in the Tech Industry</h3>
              <p className='text-gray text-base w-2/3'>Quis eleifend quam adipiscing vitae proin sagittis nisl. Lectus vestibulum mattis.</p>
            </div>
            <Info />
          </div>
          <div className='flex gap-[40px]'>
            <img className='w-[175px] object-cover rounded-md' src='image3.jpeg' />
            <img className='w-[278px] object-cover rounded-md' src='image4.jpeg' />
          </div>
        </div>
      </div>
      <div className=' bg h-[802px] '>
        <div className='max-w-[1140px] mx-auto pt-[150px] '>
          <div className='flex gap-[77px]'>
            <Form />
            <div>
              <div className='flex flex-col gap-3 mb-[59px]'>
                <h4 className=' text-white font-bold text-base  uppercase'>OUR SUCCESS</h4>
                <h2 className='text-white text-4xl font-bold  '>We have helped more than <br /> 700+ clients worldwide</h2>
                <p className='text-sm text-white'>Quis eleifend quam adipiscing vitae proin sagittis nisl. Lectus vestibulum mattis.</p>
              </div>
              <div className='flex flex-wrap gap-[38px] w-[600px]'>
                <div className='flex items-center gap-[17px]'>
                  <div className='w-[100px] h-[100px] relative'>
                    <span className='absolute py-[36px] text-center text-xl text-white px-[30px]' >90%</span>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <path d="M95 50C97.7614 50 100.026 52.2443 99.7503 54.992C98.7368 65.0939 94.6651 74.6923 88.0203 82.4724C80.2885 91.5252 69.5803 97.522 57.8217 99.3844C46.0631 101.247 34.0259 98.8524 23.8751 92.632C13.7243 86.4116 6.12607 76.7733 2.44717 65.4509C-1.23172 54.1284 -0.749883 41.8648 3.80602 30.8658C8.36193 19.8669 16.6929 10.8545 27.3005 5.44968C37.908 0.0448468 50.0961 -1.3977 61.6723 1.3815C71.6211 3.77 80.5569 9.14198 87.3146 16.7189C89.1526 18.7798 88.6398 21.9265 86.4058 23.5497C84.1717 25.1728 81.0658 24.6515 79.1768 22.6372C73.857 16.9646 66.97 12.9375 59.3378 11.1052C50.0768 8.88184 40.3264 10.0359 31.8404 14.3597C23.3543 18.6836 16.6895 25.8935 13.0448 34.6927C9.40009 43.4918 9.01462 53.3027 11.9577 62.3607C14.9009 71.4187 20.9794 79.1293 29.1001 84.1056C37.2207 89.0819 46.8505 90.9974 56.2574 89.5075C65.6642 88.0176 74.2308 83.2201 80.4162 75.9779C85.5138 70.0095 88.7184 62.7034 89.688 54.9872C90.0322 52.2473 92.2386 50 95 50Z" fill="#FF9900" />
                      </svg>
                    </div>
                  </div>
                  <p className='w-[147px] text-white'>Quis eleifend quam adipiscing.</p>
                </div>
                <div className='flex items-center gap-[17px]'>
                  <div className='w-[100px] h-[100px] relative'>
                    <span className='absolute py-[36px] text-center text-xl text-white px-[30px]' >75%</span>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <path d="M95 50C97.7614 50 100.026 52.2442 99.7502 54.9918C98.935 63.1172 96.1385 70.9465 91.5735 77.7785C86.0794 86.001 78.2705 92.4096 69.1342 96.194C59.9979 99.9784 49.9445 100.969 40.2455 99.0393C30.5464 97.11 21.6373 92.348 14.6447 85.3553C7.65204 78.3627 2.89 69.4536 0.960736 59.7545C-0.968525 50.0555 0.0216418 40.0021 3.80602 30.8658C7.59041 21.7295 13.999 13.9206 22.2215 8.42652C29.0535 3.86151 36.8828 1.06502 45.0082 0.249773C47.7558 -0.0259071 50 2.23858 50 5C50 7.76142 47.7528 9.96779 45.0129 10.3121C38.8688 11.0841 32.9638 13.2757 27.7772 16.7412C21.1992 21.1365 16.0723 27.3836 13.0448 34.6927C10.0173 42.0017 9.22518 50.0444 10.7686 57.8036C12.312 65.5629 16.1216 72.6902 21.7157 78.2843C27.3098 83.8784 34.4371 87.688 42.1964 89.2314C49.9556 90.7748 57.9983 89.9827 65.3073 86.9552C72.6164 83.9277 78.8635 78.8008 83.2588 72.2228C86.7243 67.0362 88.9159 61.1312 89.6879 54.9871C90.0322 52.2472 92.2386 50 95 50Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                  <p className='w-[147px] text-white'>Quis eleifend quam adipiscing.</p>
                </div>
                <div className='flex items-center gap-[17px]'>
                  <div className='w-[100px] h-[100px] relative'>
                    <span className='absolute py-[36px] text-center text-xl text-white px-[30px]' >85%</span>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <path d="M95 50C97.7614 50 100.026 52.2443 99.7503 54.9919C98.803 64.4336 95.183 73.4488 89.2658 80.9547C82.3128 89.7746 72.5929 95.9967 61.6723 98.6185C50.7516 101.24 39.2663 100.109 29.067 95.4072C18.8677 90.7052 10.5484 82.7064 5.44968 72.6995C0.350932 62.6927 -1.23031 51.2606 0.960735 40.2455C3.15178 29.2303 8.98751 19.2736 17.5276 11.9797C26.0677 4.68579 36.8147 0.479475 48.037 0.0385485C57.5874 -0.33669 67.0087 2.03371 75.2039 6.81704C77.5889 8.20904 78.0735 11.3602 76.4503 13.5942C74.8272 15.8283 71.7123 16.2924 69.2933 14.9604C62.9444 11.4646 55.7342 9.74384 48.4296 10.0308C39.4518 10.3836 30.8541 13.7486 24.0221 19.5838C17.19 25.4189 12.5214 33.3843 10.7686 42.1964C9.01575 51.0085 10.2807 60.1541 14.3597 68.1596C18.4387 76.1651 25.0942 82.5642 33.2536 86.3257C41.4131 90.0873 50.6013 90.9922 59.3378 88.8948C68.0743 86.7973 75.8503 81.8196 81.4127 74.7638C85.9384 69.0229 88.7844 62.1783 89.688 54.9871C90.0322 52.2472 92.2386 50 95 50Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                  <p className='w-[147px] text-white'>Quis eleifend quam adipiscing.</p>
                </div>
                <div className='flex items-center gap-[17px]'>
                  <div className='w-[100px] h-[100px] relative'>
                    <span className='absolute py-[36px] text-center text-xl text-white px-[30px]' >90%</span>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <path d="M95 50C97.7614 50 100.026 52.2443 99.7503 54.992C98.7368 65.0939 94.6651 74.6923 88.0203 82.4724C80.2885 91.5252 69.5803 97.522 57.8217 99.3844C46.0631 101.247 34.0259 98.8524 23.8751 92.632C13.7243 86.4116 6.12607 76.7733 2.44717 65.4509C-1.23172 54.1284 -0.749883 41.8648 3.80602 30.8658C8.36193 19.8669 16.6929 10.8545 27.3005 5.44968C37.908 0.0448468 50.0961 -1.3977 61.6723 1.3815C71.6211 3.77 80.5569 9.14198 87.3146 16.7189C89.1526 18.7798 88.6398 21.9265 86.4058 23.5497C84.1717 25.1728 81.0658 24.6515 79.1768 22.6372C73.857 16.9646 66.97 12.9375 59.3378 11.1052C50.0768 8.88184 40.3264 10.0359 31.8404 14.3597C23.3543 18.6836 16.6895 25.8935 13.0448 34.6927C9.40009 43.4918 9.01462 53.3027 11.9577 62.3607C14.9009 71.4187 20.9794 79.1293 29.1001 84.1056C37.2207 89.0819 46.8505 90.9974 56.2574 89.5075C65.6642 88.0176 74.2308 83.2201 80.4162 75.9779C85.5138 70.0095 88.7184 62.7034 89.688 54.9872C90.0322 52.2473 92.2386 50 95 50Z" fill="#FF9900" />
                      </svg>
                    </div>
                  </div>
                  <p className='w-[147px] text-white'>Quis eleifend quam adipiscing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-[125px] pt-[125px] max-w-[1140px] mx-auto '>
        <div className='text-center mb-[51px]'>
          <h4 className='text-darkPurple text-base font-bold'>TESTIMONIALS</h4>
          <h2 className='text-black1 text-4xl font-bold'> Our successful clients</h2>
        </div>
        <div>
          <Comment />
        </div>
      </div>
      <div className='max-w-[1140px] mx-auto my-[125px] flex gap-[151px] items-center '>
        <div className='grid w-1/2 gap-[23px] grid-cols-[repeat(2,minmax(272px,1fr))] '>
          <img className='img' src='img.jpeg' />
          <img className='img' src='img1.jpeg' />
          <img className='img' src='img2.jpeg' />
          <img className='img' src='img3.jpeg' />
        </div>
        <div>
          <div className='flex flex-col gap-3'>
            <h4 className='text-darkPurple text-base font-bold'>TESTIMONIALS</h4>
            <h2 className='text-black1 text-4xl font-bold'> Our successful clients</h2>
            <p className='text-gray '>Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Ligula ullamcorper malesuada proin libero nunc consequat.
              Dignissim sodales ut eu sem integer vitae justo. Tincidunt tortor aliquam nulla facilisi cras.</p>
          </div>
          <div className='mt-[50px]'>
            <button className='text-darkPurple font-bold uppercase w-[275px] h-[65px] border-solid border rounded-md border-darkPurple hover:bg-darkPurple hover:text-white'>
              RECENT PROJECTS
            </button>
          </div>
        </div>
      </div>
      <div className='bg-[#FCF8FF] max-w-[1920px] mx-auto py-[125px] mt-[125px]'>
        <div className='max-w-[1140px] mx-auto  flex justify-between  '>
          <div>
            <div className='flex flex-col gap-3 w-[535px]'>
              <h4 className='text-darkPurple text-base font-bold'>SKILLS</h4>
              <h2 className='text-black1 text-4xl font-bold'> We have experts in their respective fields</h2>
              <p className='text-gray w-[386px]'>Leo urna molestie at elementum. At consectetur lorem donec massa sapien faucibus et. iverra suspendisse potenti nullam ac tortor vitae. fFacilisi etiam dignissim diam quis.</p>
            </div>
            <div>
              <ProgressBar title="WINDOWS/MAC" completed="95" />
              <ProgressBar title="IOS/ANDROID" completed="85" />
              <ProgressBar title="HTML/CSS/JS" completed="95" />
            </div>
          </div>
          <div className='flex flex-col justify-start'>
            <CommentQuestion />
          </div>
        </div>
      </div>
      <div className='bg-[#FCF8FF] max-w-[1920px] mx-auto '>
        <div className='max-w-[1140px] mx-auto  '>
          <div className='text-center pb-[32px] flex flex-col gap-[12px]'>
            <h4 className='text-darkPurple text-base font-bold'>TEAM</h4>
            <h2 className='text-black1 text-4xl font-bold'> Our certified experts</h2>
            <p className='text-gray '>Quis eleifend quam adipiscing vitae proin sagittis nisl. Lectus vestibulum mattis.</p>

          </div>
          <div >
            <TeamCard />
          </div>
          <div className='flex items-center gap-[29px] justify-center py-[95px]'>
            <div className='relative flex'>
              <img className='profile ' src='profile4.jpeg' />
              <img className='profile relative left-[-15px]' src='profile6.jpeg' />
              <img className='profile relative left-[-15px]' src='profile5.jpeg' />
            </div>
            <p className='text-gray'>Quis eleifend quam adipiscing vitae proin sagittis nisl. Lectus vestibulum mattis.</p>
            <Link href='#' >
              <div className='flex items-center'>
                <span className='text-darkPurple text-xs '>Make a Request</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M8.25703 6.39863L5.06953 9.58613C4.84922 9.80645 4.49297 9.80645 4.275 9.58613L3.74531 9.05645C3.525 8.83613 3.525 8.47988 3.74531 8.26191L6.00469 6.00254L3.74531 3.74316C3.525 3.52285 3.525 3.1666 3.74531 2.94863L4.27266 2.41426C4.49297 2.19395 4.84922 2.19395 5.06719 2.41426L8.25469 5.60176C8.47734 5.82207 8.47734 6.17832 8.25703 6.39863Z" fill="#624DE7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='max-w-[1920px] mx-auto bg-purple'>
        <div className='max-w-[1140px] mx-auto flex items-center py-[75px] justify-between'>
          <h2 className='text-4xl text-white  font-bold'>Service discount up to 30% for any project</h2>
          <button className='w-[244px] h-[65px] text-white border boder-solid border-white hover:bg-white rounded-md hover:text-[#624DE7]'>START PROJECT NOW</button>
        </div>
      </div>
    <Footer/>

    </div>
  )
}
