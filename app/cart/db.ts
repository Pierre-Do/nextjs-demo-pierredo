import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getOrCreateById(id: number) {
  const cart = await prisma.cart.findFirst({
    where: { id },
    include: {
      items: true,
    },
  });
  if (cart?.id) {
    return cart;
  }

  return prisma.cart.create({
    data: {},
  });
}

export async function setCartItem(cartId: number) {
  const cart = await getOrCreateById(cartId);
  if (!cart?.id) {
    throw new Error('Cart not found');
  }

  await prisma.cartItem.create({
    data: {
      quantity: 1,
      cartId: cart.id,
    },
  });

  return cart;
}

export async function deleteCart(cartId: number) {
  const cart = await getOrCreateById(cartId);
  if (cart?.id) {
    await prisma.cart.delete({
      where: { id: cart.id },
    });
  }
}

export function handleDb<T>(promise: Promise<T>) {
  return promise
    .then(async (value) => {
      await prisma.$disconnect();
      return value;
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
