'use server';

import { prisma } from '../prisma';
import { revalidatePath } from 'next/cache';

// Fetch all portfolios
export async function getPortfolios() {
  try {
    const portfolios = await prisma.portfolio.findMany({
      include: {
        category: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return portfolios;
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    throw new Error('Failed to fetch portfolios');
  }
}

// Fetch all categories (useful for the create/edit form)
export async function getCategories() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories');
  }
}

// Create portfolio
export async function createPortfolio(data: any) {
  try {
    // Generate a simple slug if not provided
    const slug = data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    const portfolio = await prisma.portfolio.create({
      data: {
        title: data.title,
        slug: slug,
        description: data.description,
        clientName: data.clientName,
        imageUrl: data.imageUrl,
        desktopUrl: data.desktopUrl,
        mobileUrl: data.mobileUrl,
        techStack: data.techStack, // Expecting string array
        isFeatured: data.isFeatured || false,
        categoryId: data.categoryId,
      },
    });
    
    revalidatePath('/admin/portfolio');
    revalidatePath('/portfolio'); // if you have a public portfolio page
    return portfolio;
  } catch (error) {
    console.error('Error creating portfolio:', error);
    throw new Error('Failed to create portfolio');
  }
}

// Delete portfolio
export async function deletePortfolio(id: string) {
  try {
    await prisma.portfolio.delete({
      where: { id },
    });
    
    revalidatePath('/admin/portfolio');
    revalidatePath('/portfolio');
    return { success: true };
  } catch (error) {
    console.error('Error deleting portfolio:', error);
    throw new Error('Failed to delete portfolio');
  }
}

// Get single portfolio
export async function getPortfolioById(id: string) {
  try {
    const portfolio = await prisma.portfolio.findUnique({
      where: { id },
    });
    return portfolio;
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    throw new Error('Failed to fetch portfolio');
  }
}

// Update portfolio
export async function updatePortfolio(id: string, data: any) {
  try {
    const portfolio = await prisma.portfolio.update({
      where: { id },
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        clientName: data.clientName,
        imageUrl: data.imageUrl,
        desktopUrl: data.desktopUrl,
        mobileUrl: data.mobileUrl,
        techStack: data.techStack,
        isFeatured: data.isFeatured,
        categoryId: data.categoryId,
      },
    });
    
    revalidatePath('/admin/portfolio');
    revalidatePath('/portfolio');
    return portfolio;
  } catch (error) {
    console.error('Error updating portfolio:', error);
    throw new Error('Failed to update portfolio');
  }
}
