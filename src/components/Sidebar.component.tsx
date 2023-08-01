"use client";

import { ChevronDownIcon, ChevronRightIcon, ShoppingBagIcon, InboxIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { Card, Typography, List, Accordion, ListItem, AccordionHeader, ListItemPrefix, AccordionBody, ListItemSuffix, Chip } from '@material-tailwind/react'
import React from 'react'
import { LuLayoutDashboard } from 'react-icons/lu';
import { AiOutlineDatabase } from 'react-icons/ai';
import Link from 'next/link';

const SidebarComponents = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      {/* <Card className="fixed left-2 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 top-20"> */}
      <Card className="left-2 h-[calc(100vh-2rem)] w-full max-w-[18rem] p-4 shadow-xl shadow-blue-gray-900/5 mt-1">
        <div className="p-4">
          {/* <Typography variant="paragraph" color="blue-gray">
            Menu Side
          </Typography> */}
          {/* <AccordionProfile /> */}
        </div>
        <List>
          <Accordion
            open={open === 1}
            icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}
          >
            <Link href='/dashboard' prefetch={false}>
              <ListItem>
                <ListItemPrefix><LuLayoutDashboard className="h-5 w-5" /></ListItemPrefix>
                <Typography color="blue-gray" variant="small" className="mr-auto font-normal text-xs">
                  Beranda
                </Typography>
              </ListItem>
            </Link>
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                <ListItemPrefix><AiOutlineDatabase className="h-5 w-5" /></ListItemPrefix>
                <Typography color="blue-gray" variant="small" className="mr-auto font-normal text-xs">Data Master</Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0 pl-6">
                <Link href='/analisis'prefetch={false}>
                  <ListItem>
                    <ListItemPrefix><ChevronRightIcon strokeWidth={3} className="h-3 w-5" /></ListItemPrefix>
                    <Typography color="blue-gray" variant="small" className="mr-auto font-normal text-xs">
                      Analytics
                    </Typography>
                  </ListItem>
                </Link>
                <ListItem>
                  <ListItemPrefix><ChevronRightIcon strokeWidth={3} className="h-3 w-5" /></ListItemPrefix>
                  <Typography color="blue-gray" variant="small" className="mr-auto font-normal text-xs">Reporting</Typography>
                </ListItem>
                <ListItem>
                  <ListItemPrefix><ChevronRightIcon strokeWidth={3} className="h-3 w-5" /></ListItemPrefix>
                  <Typography color="blue-gray" variant="small" className="mr-auto font-normal text-xs">Projects</Typography>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`} />}
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                <ListItemPrefix><ShoppingBagIcon className="h-5 w-5" /></ListItemPrefix>
                <Typography color="blue-gray" variant="small" className="mr-auto font-normal text-xs">E-Commerce</Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix><ChevronRightIcon strokeWidth={3} className="h-3 w-5" /></ListItemPrefix>
                  <Typography color="blue-gray" variant="small" className="mr-auto font-normal text-xs">Orders</Typography>
                </ListItem>
                <ListItem>
                  <ListItemPrefix><ChevronRightIcon strokeWidth={3} className="h-3 w-5" /></ListItemPrefix>
                  <Typography color="blue-gray" variant="small" className="mr-auto font-normal text-xs">Products</Typography>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <ListItem>
            <ListItemPrefix><InboxIcon className="h-5 w-5" /></ListItemPrefix>
            <Typography color="blue-gray" variant="small" className="mr-auto font-normal text-xs">Inbox</Typography>
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix><UserCircleIcon className="h-5 w-5" /></ListItemPrefix>
            <Typography color="blue-gray" variant="small" className="mr-auto font-normal text-xs">Profile</Typography>
          </ListItem>
          <ListItem>
            <ListItemPrefix><Cog6ToothIcon className="h-5 w-5" /></ListItemPrefix>
            <Typography color="blue-gray" variant="small" className="mr-auto font-normal text-xs">Settings</Typography>
          </ListItem>
        </List>
      </Card>
    </div>
  )
}

export default SidebarComponents